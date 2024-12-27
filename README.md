

# Quizo: A Customizable Quiz Application

Quizo is a web-based quiz application designed to be customizable and user-friendly. With Quizo, you can quickly build and deploy your own quizzes. Whether you're creating a personal project or a classroom tool, this app provides an excellent starting point.

## Features

- **Multiple Choice Questions**: Supports quizzes with single-answer questions.
- **Score Tracking**: Displays the user's score at the end of the quiz.
- **Responsive Design**: Optimized for desktops and mobile devices.
- **Easy Customization**: Add questions or modify the UI effortlessly.
- **MongoDB Integration**: Stores quiz data and user progress persistently.
- **OpenAI Integration**: Utilizes AI-powered suggestions or dynamic features to enhance quiz interaction.

## Getting Started

### Prerequisites

To run this project, ensure you have:

- **Next.js** (v12 or higher)  
- **MongoDB** (self-hosted or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))  
- **npm** (v6 or higher)  
- **An OpenAI API Key** (for features utilizing OpenAI services)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/83Gh0st/quizo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd quizo
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables:

   ```plaintext
   DATABASE_URL=<your-mongodb-connection-string>
   OPENAI_API_KEY=<your-openai-api-key>

   DATABASE_PASSWORD="sFb5UElZ5oFSIy6K"


   NEXTAUTH_URL=http://localhost:3000  # Change to your production URL if needed
   NEXTAUTH_SECRET=your-secret-key   # Use a secure secret key


   GOOGLE_CLIENT_ID="-.apps..com"
   GOOGLE_CLIENT_SECRET="--"




   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

   The app will now be available at `http://localhost:3000`.

## Project Structure

```plaintext
quizo/
├── public/
│   ├── assets/
│   └── ...
├── src/
│   ├── components/
│   │   ├── Question.js    # Component for individual questions
│   │   ├── Quiz.js        # Component to manage quiz flow
│   │   ├── .js # Handles OpenAI API interactions
│   │   └── ...
│   ├── data/
│   │   └── questions.js   # File containing static quiz questions
│   ├── lib/
│   │   ├── mongodb.js     # MongoDB connection helper
│   │   └── ...
│   ├── pages/
│   │   ├── api/
│   │   │   ├── quiz.js    # API route for fetching quizzes
│   │   │   ├── openai.js  # API route for AI features
│   │   │   └── ...
│   │   ├── index.js       # Main page
│   │   └── ...
│   ├── styles/
│   │   └── globals.css    # Global styling
│   ├── App.js             # Main app component
│   ├── index.js           # Entry point
│   └── ...
├── package.json           # Dependencies and scripts
└── ...
```

## OpenAI Features

Quizo uses **OpenAI** to enhance quiz functionality. Examples include:

- **Dynamic Question Suggestions**: Generate new quiz questions dynamically.
- **Intelligent Hints**: Provide hints to users based on AI-powered insights.
- **Answer Feedback**: Leverages AI to evaluate and generate detailed feedback for answers.

The OpenAI integration is handled in `src/components/Openai.js` and the API route at `src/pages/api/openai.js`.

### Configuring OpenAI

Ensure your `.env` file contains your OpenAI API key:

```plaintext
OPENAI_API_KEY=<your-openai-api-key>
```

You can update OpenAI-related functionality in `OpenAIHelper.js`.

## MongoDB Integration

Quizo uses **MongoDB** to store quiz data, including:

- Questions and answers
- User progress and scores

Update the MongoDB URI in your `.env.local` file:

```plaintext
DATABASE_URL=<your-mongodb-connection-string>
```

Database connection logic can be found in `src/lib/mongodb.js`.

## Customization

### Adding Questions

To add questions, you can either:

1. Edit the `src/data/questions.js` file for static questions.
2. Use the MongoDB database to dynamically load questions.

### Modifying the User Interface

Modify the UI components located in the `src/components/` directory. Examples:

- **Question.js**: Handles individual question rendering.
- **Quiz.js**: Manages quiz flow and user interactions.

You can also customize the styling in the `src/styles/` directory.

## Deployment

To deploy the app:

1. Create a production build:

   ```bash
   npm run build
   ```

2. Upload the contents of the `.next` folder to a hosting service like:

   - [Vercel](https://vercel.com/)
   - [Netlify](https://www.netlify.com/)

Ensure your production environment includes the required `.env` variables.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

This project was inspired by the [Build A Quiz App With JavaScript](https://youtu.be/vIyU4nInlt0) tutorial by Elliott Chong. Special thanks to the creators for their guidance and resources.

---

Feel free to star the repo if you find it helpful! 🌟  
For any issues or suggestions, open an [issue](https://github.com/83Gh0st/quizo/issues).
```

