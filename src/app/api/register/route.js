import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import dotenv from "dotenv";
import mysql from "mysql2/promise";  // Assuming you're using mysql2

dotenv.config();

async function handleRegister(req) {
  const { firstName, lastName, email, phone, password } = await req.json();

  // Validate that all required fields are provided
  if (!firstName || !lastName || !email || !phone || !password) {
    return NextResponse.json(
      { message: "All fields are required." },
      { status: 400 }
    );
  }

  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  // Establish a connection to the database
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,  // Replace with your database host
    user: process.env.DB_USER,  // Replace with your database user
    password: process.env.DB_PASSWORD,  // Replace with your database password
    database: process.env.DB_NAME,
    database: process.env.DB_PORT,  // Replace with your database name
  });

  try {
    // Check if the email already exists
    const [rows] = await connection.execute("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length > 0) {
      return NextResponse.json(
        { message: "Email already exists." },
        { status: 400 }
      );
    }

    // Insert the new user into the database
    await connection.execute(
      "INSERT INTO users (firstName, lastName, email, phone, password) VALUES (?, ?, ?, ?, ?)",
      [firstName, lastName, email, phone, hashedPassword]
    );

    // Close the connection
    await connection.end();

    return NextResponse.json(
      { message: "Registration successful!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json(
      { message: "An error occurred during registration." },
      { status: 500 }
    );
  }
}

async function handleLogin(req) {
  const { email, password } = await req.json();

  // Check if email and password are provided
  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required." },
      { status: 400 }
    );
  }

  // Establish a connection to the database
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  try {
    // Fetch user by email
    const [rows] = await connection.execute("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length === 0) {
      return NextResponse.json(
        { message: "Email not found." },
        { status: 400 }
      );
    }

    const user = rows[0];

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid password." },
        { status: 400 }
      );
    }

    // Close the connection
    await connection.end();

    return NextResponse.json(
      { message: "Login successful!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json(
      { message: "An error occurred during login." },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  const { action } = await req.json();

  if (action === "register") {
    return handleRegister(req);
  } else if (action === "login") {
    return handleLogin(req);
  } else {
    return NextResponse.json(
      { message: "Invalid action." },
      { status: 400 }
    );
  }
}
