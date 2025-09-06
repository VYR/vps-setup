    const mysql = require('mysql2/promise'); // Using mysql2 with promises

    async function connectToMySQL() {
        try {
            const connection = await mysql.createConnection({
                host: '184.168.126.83', // Your MySQL host
                //  mysql -u easybus_db_user -h 184.168.126.83 -p
                user: 'easybus_db_user', // Your MySQL username
                password: 'Ea&syBusDbUser@625#!', // Your MySQL password
                database: 'easy_bus' // The database you want to connect to
            });
            console.log('Connected to MySQL database!');
            // You can now perform database operations using the 'connection' object
            await connection.end(); // Close the connection when done
            console.log('Connection closed.');
        } catch (error) {
            console.error('Error connecting to MySQL:', error);
        }
    }

    connectToMySQL();