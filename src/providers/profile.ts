import axios from "axios";

export async function fetchUserProfile(userId: string) {
    try {
    const response = await axios.get(`http://127.0.0.1:8090/api/collections/users/records/${userId}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the authorization token
            },
          });
          console.log(response.data)
      return response.data;
    } catch (error) {
      console.error("Error fetching user profile:", error);
      if (error.response && error.response.status === 404) {
        console.error("User not found:", userId);
      }
      return null;
    }
  }


// export async function fetchWeeklyCO2Emissions(userId: string) {
//     const today = new Date();
//     const weekStart = new Date(today.setDate(today.getDate() - today.getDay()));
    
//     try {
//       const response = await axios.get('http://127.0.0.1:8090/api/collections/emission/records', {
//         params: {
//           filter: `user_id = "${userId}" && created >= "${weekStart.toISOString()}"`,
//           sort: 'created',
//         },
//       });
  
//       const co2Data = response.data.items.reduce((acc: any, record: any) => {
//         const day = new Date(record.created).toLocaleDateString('en-US', { weekday: 'long' });
//         if (!acc[day]) {
//           acc[day] = { day, co2: 0 };
//         }
//         acc[day].co2 += record.co2;
//         return acc;
//       }, {});
  
//       return Object.values(co2Data);
  
//     } catch (error) {
//       console.error("Error fetching CO2 emissions:", error);
//       return [];
//     }
//   }

export async function fetchWeeklyCO2Emissions(userId: string) {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    try {
      // Fetch data from your PocketBase or other API
      const response = await axios.get("http://127.0.0.1:8090/api/collections/emission/records", {
        params: {
          filter: `user_id = "${userId}" && created >= "${getWeekStartDate()}T00:00:00Z"`,
        },
      });
  
      const data = response.data.items;
      
      // Create a map for CO2 data
      const co2Map: { [key: string]: number } = {};
  
      // Populate the map with fetched data
      data.forEach((item: any) => {
        const date = new Date(item.created);
        const dayName = daysOfWeek[date.getDay() - 1]; // getDay() returns 0 for Sunday, we need to adjust it
        co2Map[dayName] = (co2Map[dayName] || 0) + item.co2;
      });
  
      // Ensure every day of the week has an entry
      return daysOfWeek.map(day => ({
        day,
        co2: co2Map[day] || 0,
      }));
    } catch (error) {
      console.error("Error fetching CO2 emissions:", error);
      return daysOfWeek.map(day => ({
        day,
        co2: 0,
      }));
    }
  }
  
  function getWeekStartDate() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const dayDiff = now.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    const monday = new Date(now.setDate(dayDiff));
    return monday.toISOString().split("T")[0];
  }