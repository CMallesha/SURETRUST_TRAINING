import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class MySQLExample {
    public static void main(String[] args) {
        // Database credentials
        String url = "jdbc:mysql://localhost:3306/college"; // Replace "your_database" with the database name
        String username = "root"; // Replace with your MySQL username
        String password = "Mallu@4564"; // Replace with your MySQL password

        // Initialize the connection object
        Connection connection = null;

        try {
            // Register the JDBC driver (optional since Java 6 and above)
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Open a connection
            connection = DriverManager.getConnection(url, username, password);

            // Create a statement object to execute queries
            Statement statement = connection.createStatement();

            // Execute a query
            String sql = "SELECT * FROM student"; // Replace "your_table" with your table name
            ResultSet resultSet = statement.executeQuery(sql);

            // Process the result set
            while (resultSet.next()) {
                // Example: Retrieve column values
                int id = resultSet.getInt("id"); // Replace "id" with your column name
                String name = resultSet.getString("name"); // Replace "name" with your column name

                System.out.println("ID: " + id + ", Name: " + name);
            }

            // Clean up environment
            resultSet.close();
            statement.close();
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            // Ensure connection is closed
            try {
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException se) {
                se.printStackTrace();
            }
        }
    }
}
