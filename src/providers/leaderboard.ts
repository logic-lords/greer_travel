import axios from 'axios';

// export async function fetchLeaderboardData() {
//     const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

//     try {
//         // Step 1: Fetch all emission records for today
//         const emissionResponse = await axios.get('http://127.0.0.1:8090/api/collections/emission/records', {
//             params: {
//                 filter: `created >= "${today}T00:00:00Z" && created <= "${today}T23:59:59Z"`,
//             },
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the authorization token
//             },
//         });

//         // Step 2: Group emissions by user and sum them
//         const co2Map: { [userId: string]: number } = {};
//         emissionResponse.data.items.forEach((item: any) => {
//             if (!co2Map[item.user_id]) {
//                 co2Map[item.user_id] = 0;
//             }
//             co2Map[item.user_id] += item.co2;
//         });

//         // Step 3: Fetch user details for each unique user
//         const userPromises = Object.keys(co2Map).map(async (userId) => {
//             const userResponse = await axios.get(`http://127.0.0.1:8090/api/collections/users/records/${userId}`, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the authorization token
//                 },
//             });

//             const user = userResponse.data;
//             return {
//                 avatar: user.avatar || "/images/default-avatar.png", // Assuming you have an avatar field in user data
//                 name: `${user.first_name} ${user.last_name}`,
//                 co2Savings: `${co2Map[userId]} kg/CO2`,
//             };
//         });

//         // Wait for all user data to be fetched
//         const leaderboardData = await Promise.all(userPromises);

//         // Step 4: Sort leaderboard data by CO2 emissions in ascending order
//         leaderboardData.sort((a, b) => parseFloat(a.co2Savings) - parseFloat(b.co2Savings));

//         return leaderboardData;
//     } catch (error) {
//         if (error.response && error.response.data) {
//             console.error('Error fetching leaderboard data:', error.response.data);
//         } else {
//             console.error('Error fetching leaderboard data:', error.message);
//         }
//         return [];
//     }
// }


// export async function fetchLeaderboardData() {
//     const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

//     try {
//         // Step 1: Fetch all emission records for today
//         const emissionResponse = await axios.get('http://127.0.0.1:8090/api/collections/emission/records', {
//             params: {
//                 filter: `created >= "${today}T00:00:00Z" && created <= "${today}T23:59:59Z"`,
//             },
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the authorization token
//             },
//         });

//         console.log('Emission API Response:', emissionResponse.data.items); // Log emission response

//         // Step 2: Group emissions by user and sum them
//         const co2Map = {};
//         emissionResponse.data.items.forEach((item) => {
//             if (!co2Map[item.user_id]) {
//                 co2Map[item.user_id] = 0;
//             }
//             co2Map[item.user_id] += item.co2;
//         });

//         console.log('CO2 Map:', co2Map); // Log the CO2 map

//         // Step 3: Fetch user details for each unique user
//         const userPromises = Object.keys(co2Map).map(async (userId) => {
//             const userResponse = await axios.get(`http://127.0.0.1:8090/api/collections/users/records/${userId}`, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the authorization token
//                 },
//             });

//             console.log(`User API Response for ${userId}:`, userResponse.data); // Log user response

//             const user = userResponse.data;
//             return {
//                 avatar: user.avatar || "/images/default-avatar.png", // Assuming you have an avatar field in user data
//                 name: `${user.first_name} ${user.last_name}`,
//                 co2Savings: `${co2Map[userId]} kg/CO2`,
//             };
//         });

//         // Wait for all user data to be fetched
//         const leaderboardData = await Promise.all(userPromises);

//         console.log('Final Leaderboard Data:', leaderboardData); // Log the final leaderboard data

//         // Step 4: Sort leaderboard data by CO2 emissions in ascending order
//         leaderboardData.sort((a, b) => parseFloat(a.co2Savings) - parseFloat(b.co2Savings));

//         return leaderboardData;
//     } catch (error) {
//         if (error.response && error.response.data) {
//             console.error('Error fetching leaderboard data:', error.response.data);
//         } else {
//             console.error('Error fetching leaderboard data:', error.message);
//         }
//         return [];
//     }
// }


export async function fetchLeaderboardData() {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    try {
        // Step 1: Fetch all emission records for today
        const emissionResponse = await axios.get('http://127.0.0.1:8090/api/collections/emission/records', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the authorization token
            },
        });

        // Step 2: Group emissions by user and sum them for today
        const co2Map = {};
        emissionResponse.data.items.forEach((item :any) => {
            if (!co2Map[item.user_id]) {
                co2Map[item.user_id] = 0;
            }
            co2Map[item.user_id] += item.co2;
        });

        // Step 3: Fetch user details for each unique user
        const userPromises = Object.keys(co2Map).map(async (userId) => {
            const userResponse = await axios.get(`http://127.0.0.1:8090/api/collections/users/records/${userId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the authorization token
                },
            });

            const user = userResponse.data;
            return {
                avatar: user.avatar || "/images/default-avatar.png", // Assuming you have an avatar field in user data
                name: `${user.first_name} ${user.last_name}`,
                co2: co2Map[userId], // Use summed CO2 value
            };
        });

        // Wait for all user data to be fetched
        const leaderboardData = await Promise.all(userPromises);

        // Step 4: Sort leaderboard data by CO2 emissions in ascending order
        leaderboardData.sort((a, b) => a.co2 - b.co2);

        return leaderboardData;
    } catch (error) {
        if (error.response && error.response.data) {
            console.error('Error fetching leaderboard data:', error.response.data);
        } else {
            console.error('Error fetching leaderboard data:', error.message);
        }
        return [];
    }
}
