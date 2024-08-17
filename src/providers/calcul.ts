import axios from 'axios';

// Define the emission factors for different fuel types
const emissionFactors: { [key: string]: number } = {
  gasoline: 2.31,
  diesel: 2.68,
  kerosene: 2.52,
};

// Calculate CO2 emissions based on the provided data
export function calculateCO2(data: any): number {
  return data.fields.reduce((totalCO2: number, field: any) => {
    const kilometers = Number(field.kilometers);
    const fuelConsumption = Number(field.fuelConsumption);
    const emissionFactor = emissionFactors[field.fuelType] || 0;

    const co2Emission = kilometers * fuelConsumption * emissionFactor;
    return totalCO2 + co2Emission;
  }, 0);
}



export async function submitCO2Emission(co2: number, userId: string) {
    const today = new Date().toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format
  
    try {
      // Check for an existing record
      const existingRecords = await axios.get('http://127.0.0.1:8090/api/collections/emission/records', {
        params: {
          filter: `user_id = "${userId}" && created >= "${today}T00:00:00Z" && created <= "${today}T23:59:59Z"`,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the authorization token
        },
      });
  
      if (existingRecords.data.items.length > 0) {
        // Update the existing record with new CO2 value
        const existingRecord = existingRecords.data.items[0];
        const newCo2Value = existingRecord.co2 + co2;
  
        await axios.patch(`http://127.0.0.1:8090/api/collections/emission/records/${existingRecord.id}`, {
          co2: newCo2Value,
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the authorization token
          },
        });
        console.log(`Updated CO2 emission to ${newCo2Value} for record ${existingRecord.id}`);
      } else {
        // Create a new record
        const data = {
          co2: co2,  // CO2 value calculated
          user_id: userId,  // Ensure this matches the authenticated user
        };
  
        const response = await axios.post('http://127.0.0.1:8090/api/collections/emission/records', data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the authorization token
          },
        });
        console.log(`Created new CO2 emission record with value ${co2}`);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.error('Error submitting CO2 emissions:', error.response.data);
      } else {
        console.error('Error submitting CO2 emissions:', error.message);
      }
    }
}