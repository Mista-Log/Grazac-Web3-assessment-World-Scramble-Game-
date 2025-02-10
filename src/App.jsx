import FloatingLetters from "./FloatingLetters";
import React, { useState, useEffect } from "react";
import "./App.css";

// Expanded list of 100 programming-related words
const WORDS = [
  { word: "react", hint: "A JavaScript library for building user interfaces" },
  { word: "javascript", hint: "A programming language used for web development" },
  { word: "component", hint: "A reusable piece of UI in React" },
  { word: "state", hint: "An object that holds data in a React component" },
  { word: "props", hint: "Data passed from parent to child components" },
  { word: "function", hint: "A block of code designed to perform a particular task" },
  { word: "variable", hint: "A container for storing data values" },
  { word: "loop", hint: "A sequence of instructions that is repeated until a condition is met" },
  { word: "array", hint: "A data structure consisting of a collection of elements" },
  { word: "object", hint: "A collection of key-value pairs" },
  { word: "promise", hint: "An object representing the eventual completion or failure of an asynchronous operation" },
  { word: "async", hint: "A keyword used to define an asynchronous function" },
  { word: "await", hint: "A keyword used to wait for a promise to resolve" },
  { word: "closure", hint: "A function that retains access to its lexical scope" },
  { word: "recursion", hint: "A function that calls itself" },
  { word: "algorithm", hint: "A step-by-step procedure for solving a problem" },
  { word: "binary", hint: "A number system with a base of 2" },
  { word: "boolean", hint: "A data type with two possible values: true or false" },
  { word: "callback", hint: "A function passed as an argument to another function" },
  { word: "class", hint: "A blueprint for creating objects" },
  { word: "debug", hint: "The process of finding and fixing errors in code" },
  { word: "event", hint: "An action or occurrence detected by a program" },
  { word: "framework", hint: "A platform for developing software applications" },
  { word: "git", hint: "A distributed version control system" },
  { word: "html", hint: "The standard markup language for creating web pages" },
  { word: "http", hint: "The protocol used for transmitting web pages" },
  { word: "json", hint: "A lightweight data interchange format" },
  { word: "library", hint: "A collection of pre-written code used to simplify development" },
  { word: "node", hint: "A runtime environment for executing JavaScript code" },
  { word: "npm", hint: "A package manager for JavaScript" },
  { word: "operator", hint: "A symbol that performs an operation on one or more operands" },
  { word: "parameter", hint: "A variable passed to a function" },
  { word: "query", hint: "A request for data from a database" },
  { word: "regex", hint: "A sequence of characters defining a search pattern" },
  { word: "string", hint: "A sequence of characters" },
  { word: "syntax", hint: "The set of rules that define the structure of a language" },
  { word: "template", hint: "A pre-designed format for creating documents" },
  { word: "type", hint: "A classification of data" },
  { word: "undefined", hint: "A variable that has not been assigned a value" },
  { word: "var", hint: "A keyword used to declare a variable" },
  { word: "void", hint: "A keyword used to indicate that a function does not return a value" },
  { word: "webpack", hint: "A module bundler for JavaScript" },
  { word: "xml", hint: "A markup language used for storing and transporting data" },
  { word: "yarn", hint: "A package manager for JavaScript" },
  { word: "zip", hint: "A file format used for data compression" },
  { word: "api", hint: "A set of protocols for building software applications" },
  { word: "ajax", hint: "A technique for creating fast and dynamic web pages" },
  { word: "dom", hint: "A programming interface for web documents" },
  { word: "css", hint: "A style sheet language used for describing the presentation of a document" },
  { word: "sass", hint: "A preprocessor scripting language that is interpreted into CSS" },
  { word: "less", hint: "A dynamic preprocessor style sheet language" },
  { word: "bootstrap", hint: "A front-end framework for developing responsive web pages" },
  { word: "jquery", hint: "A JavaScript library designed to simplify HTML DOM tree traversal and manipulation" },
  { word: "angular", hint: "A TypeScript-based open-source web application framework" },
  { word: "vue", hint: "A progressive JavaScript framework for building user interfaces" },
  { word: "redux", hint: "A predictable state container for JavaScript apps" },
  { word: "mocha", hint: "A JavaScript test framework" },
  { word: "jest", hint: "A JavaScript testing framework" },
  { word: "enzyme", hint: "A JavaScript testing utility for React" },
  { word: "docker", hint: "A platform for developing, shipping, and running applications" },
  { word: "kubernetes", hint: "An open-source system for automating deployment, scaling, and management of containerized applications" },
  { word: "aws", hint: "A cloud computing platform" },
  { word: "azure", hint: "A cloud computing platform" },
  { word: "gcp", hint: "A cloud computing platform" },
  { word: "heroku", hint: "A cloud platform as a service" },
  { word: "firebase", hint: "A mobile and web application development platform" },
  { word: "graphql", hint: "A query language for APIs" },
  { word: "rest", hint: "A software architectural style" },
  { word: "soap", hint: "A protocol for exchanging structured information in web services" },
  { word: "oauth", hint: "An open standard for access delegation" },
  { word: "jwt", hint: "A compact, URL-safe means of representing claims to be transferred between two parties" },
  { word: "cors", hint: "A mechanism that allows restricted resources on a web page to be requested from another domain" },
  { word: "cdn", hint: "A system of distributed servers that deliver web content to users based on their geographic location" },
  { word: "ssl", hint: "A standard security technology for establishing an encrypted link between a server and a client" },
  { word: "tls", hint: "A cryptographic protocol designed to provide communications security over a computer network" },
  { word: "ssh", hint: "A cryptographic network protocol for operating network services securely over an unsecured network" },
  { word: "ftp", hint: "A standard network protocol used for the transfer of computer files between a client and server on a computer network" },
  { word: "smtp", hint: "A communication protocol for electronic mail transmission" },
  { word: "imap", hint: "An Internet standard protocol used by email clients to retrieve email messages from a mail server" },
  { word: "pop", hint: "An application-layer Internet standard protocol used by local email clients to retrieve email from a remote server" },
  { word: "dns", hint: "A hierarchical and decentralized naming system for computers, services, or other resources connected to the Internet or a private network" },
  { word: "dhcp", hint: "A network management protocol used on Internet Protocol networks" },
  { word: "nat", hint: "A method of remapping one IP address space into another by modifying network address information in the IP header of packets" },
  { word: "vpn", hint: "A virtual private network that extends a private network across a public network" },
  { word: "lan", hint: "A computer network that interconnects computers within a limited area" },
  { word: "wan", hint: "A computer network that extends over a large geographical area" },
  { word: "man", hint: "A computer network that interconnects users with computer resources in a geographic area" },
  { word: "san", hint: "A network that provides access to consolidated, block-level data storage" },
  { word: "nas", hint: "A file-level computer data storage server connected to a computer network providing data access to a heterogeneous group of clients" },
  { word: "raid", hint: "A data storage virtualization technology that combines multiple physical disk drive components into a single logical unit" },
  { word: "hdd", hint: "A data storage device that uses magnetic storage to store and retrieve digital information" },
  { word: "ssd", hint: "A solid-state storage device that uses integrated circuit assemblies to store data persistently" },
  { word: "cpu", hint: "The electronic circuitry within a computer that carries out the instructions of a computer program" },
  { word: "gpu", hint: "A specialized electronic circuit designed to rapidly manipulate and alter memory to accelerate the creation of images in a frame buffer intended for output to a display device" },
  { word: "ram", hint: "A form of computer memory that can be read and changed in any order" },
  { word: "rom", hint: "A type of non-volatile memory used in computers and other electronic devices" },
  { word: "bios", hint: "Firmware used to perform hardware initialization during the booting process" },
  { word: "uefi", hint: "A specification that defines a software interface between an operating system and platform firmware" },
  { word: "os", hint: "System software that manages computer hardware, software resources, and provides common services for computer programs" },
  { word: "linux", hint: "A family of open-source Unix-like operating systems" },
  { word: "windows", hint: "A group of several proprietary graphical operating system families developed and marketed by Microsoft" },
  { word: "macos", hint: "A series of proprietary graphical operating systems developed and marketed by Apple Inc." },
  { word: "android", hint: "A mobile operating system based on a modified version of the Linux kernel" },
  { word: "ios", hint: "A mobile operating system created and developed by Apple Inc." },
  { word: "chromeos", hint: "A Linux-based operating system designed by Google" },
  { word: "unix", hint: "A family of multitasking, multiuser computer operating systems" },
  { word: "bash", hint: "A Unix shell and command language" },
  { word: "zsh", hint: "A Unix shell that can be used as an interactive login shell and as a command interpreter for shell scripting" },
  { word: "powershell", hint: "A task automation and configuration management framework from Microsoft" },
  { word: "python", hint: "An interpreted, high-level, general-purpose programming language" },
  { word: "java", hint: "A class-based, object-oriented programming language" },
  { word: "csharp", hint: "A general-purpose, multi-paradigm programming language" },
  { word: "ruby", hint: "An interpreted, high-level, general-purpose programming language" },
  { word: "php", hint: "A general-purpose scripting language especially suited to web development" },
  { word: "perl", hint: "A family of high-level, general-purpose, interpreted, dynamic programming languages" },
  { word: "swift", hint: "A general-purpose, multi-paradigm, compiled programming language developed by Apple Inc." },
  { word: "kotlin", hint: "A cross-platform, statically typed, general-purpose programming language with type inference" },
  { word: "go", hint: "A statically typed, compiled programming language designed at Google" },
  { word: "rust", hint: "A multi-paradigm programming language designed for performance and safety" },
  { word: "scala", hint: "A general-purpose programming language providing support for functional programming" },
  { word: "haskell", hint: "A standardized, general-purpose, purely functional programming language" },
  { word: "elixir", hint: "A functional, concurrent, general-purpose programming language" },
  { word: "erlang", hint: "A general-purpose, concurrent, functional programming language" },
  { word: "lisp", hint: "A family of programming languages with a long history and a distinctive, fully parenthesized prefix notation" },
  { word: "clojure", hint: "A modern, dynamic, and functional dialect of the Lisp programming language" },
  { word: "r", hint: "A programming language and free software environment for statistical computing and graphics" },
  { word: "dart", hint: "A client-optimized programming language for apps on multiple platforms" },
  { word: "typescript", hint: "A strict syntactical superset of JavaScript" },
  { word: "coffeescript", hint: "A programming language that transcompiles to JavaScript" },
  { word: "elm", hint: "A domain-specific programming language for declaratively creating web browser-based graphical user interfaces" },
  { word: "reason", hint: "A syntax extension and toolchain for OCaml" },
  { word: "ocaml", hint: "A general-purpose, industrial-strength programming language with an emphasis on expressiveness and safety" },
  { word: "fsharp", hint: "A cross-platform, open-source, functional-first programming language" },
  { word: "groovy", hint: "A Java-syntax-compatible object-oriented programming language" },
  { word: "julia", hint: "A high-level, high-performance, dynamic programming language" },
  { word: "lua", hint: "A lightweight, high-level, multi-paradigm programming language" },
  { word: "nim", hint: "A statically typed, compiled systems programming language" },
  { word: "pascal", hint: "An imperative and procedural programming language" },
  { word: "prolog", hint: "A logic programming language associated with artificial intelligence and computational linguistics" },
  { word: "scheme", hint: "A minimalist dialect of the Lisp programming language" },
  { word: "smalltalk", hint: "An object-oriented, dynamically typed, reflective programming language" },
  { word: "tcl", hint: "A scripting language created for embedded systems" },
  { word: "vbnet", hint: "A multi-paradigm, object-oriented programming language" },
  { word: "abap", hint: "A high-level programming language created by SAP" },
  { word: "ada", hint: "A structured, statically typed, imperative, and object-oriented high-level programming language" },
  { word: "cobol", hint: "A compiled English-like computer programming language designed for business use" },
  { word: "fortran", hint: "A general-purpose, compiled imperative programming language" },
  { word: "plsql", hint: "A procedural language extension to SQL" },
  { word: "sql", hint: "A domain-specific language used in programming and designed for managing data held in a relational database management system" },
  { word: "nosql", hint: "A non-relational database that provides a mechanism for storage and retrieval of data" },
  { word: "mongodb", hint: "A cross-platform document-oriented database program" },
  { word: "cassandra", hint: "A distributed NoSQL database management system" },
  { word: "redis", hint: "An in-memory data structure store, used as a database, cache, and message broker" },
  { word: "postgresql", hint: "A powerful, open-source object-relational database system" },
  { word: "mysql", hint: "An open-source relational database management system" },
  { word: "oracle", hint: "A multi-model database management system" },
  { word: "sqlite", hint: "A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine" },
  { word: "firebird", hint: "An open-source SQL relational database management system" },
  { word: "h2", hint: "A relational database management system written in Java" },
  { word: "hsqldb", hint: "A relational database management system written in Java" },
  { word: "derby", hint: "An open-source relational database implemented entirely in Java" },
  { word: "access", hint: "A database management system from Microsoft" },
  { word: "db2", hint: "A family of data management products from IBM" },
  { word: "informix", hint: "A family of relational database management systems" },
  { word: "teradata", hint: "A relational database management system" },
  { word: "vertica", hint: "A column-oriented, relational database management system" },
  { word: "snowflake", hint: "A cloud-based data warehousing service" },
  { word: "bigquery", hint: "A fully-managed, serverless data warehouse" },
  { word: "redshift", hint: "A fully managed, petabyte-scale data warehouse service" },
  { word: "dynamodb", hint: "A fully managed NoSQL database service" },
  { word: "cosmosdb", hint: "A globally distributed, multi-model database service" },
];

function App() {
  const [currentWord, setCurrentWord] = useState("");
  const [scrambledWord, setScrambledWord] = useState("");
  const [userGuess, setUserGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [hint, setHint] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [highScore, setHighScore] = useState(
    localStorage.getItem("highScore") || 0
  );
  const [difficulty, setDifficulty] = useState("medium"); // Difficulty level
  const [theme, setTheme] = useState("light"); // Theme
  const [gameStarted, setGameStarted] = useState(false); // Track if the game has started

  // Function to scramble a word
  const scrambleWord = (word) => {
    return word
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
  };

  // Function to select a new word based on difficulty
  const selectNewWord = () => {
    if (WORDS.length === 0) {
      setGameOver(true);
      return;
    }

    let filteredWords = WORDS;

    // Filter words based on difficulty
    if (difficulty === "easy") {
      filteredWords = WORDS.filter((wordObj) => wordObj.word.length <= 5);
    } else if (difficulty === "medium") {
      filteredWords = WORDS.filter(
        (wordObj) => wordObj.word.length > 5 && wordObj.word.length <= 8
      );
    } else if (difficulty === "hard") {
      filteredWords = WORDS.filter((wordObj) => wordObj.word.length > 8);
    }

    if (filteredWords.length === 0) {
      setGameOver(true);
      return;
    }

    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    const { word, hint } = filteredWords[randomIndex];
    setCurrentWord(word);
    setScrambledWord(scrambleWord(word));
    setHint(hint);
    WORDS.splice(randomIndex, 1); // Remove the word from the list
  };

  // Handle user guess
  const handleGuess = (e) => {
    e.preventDefault();
    if (!userGuess.trim()) {
      setFeedback("Please enter a valid guess.");
      return;
    }
    if (userGuess.toLowerCase() === currentWord) {
      setFeedback("Correct! 🎉");
      setScore((prevScore) => prevScore + 1);
      setUserGuess("");
      setTimeLeft(30); // Reset timer on correct guess
      setShowHint(false); // Hide hint for the next word
      selectNewWord();
    } else {
      setFeedback("Incorrect. Try again! ❌");
    }
  };

  // Timer logic
  useEffect(() => {
    if (timeLeft > 0 && !gameOver && gameStarted) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && gameStarted) {
      setGameOver(true);
      if (score > highScore) {
        localStorage.setItem("highScore", score);
        setHighScore(score);
      }
    }
  }, [timeLeft, gameOver, score, highScore, gameStarted]);







  return (
    <div className={`App ${theme}`}>
      <FloatingLetters /> {/* Add this line */}
      <h1>Word Scramble Game</h1>
      {!gameStarted ? (
        <div className="start-screen">
          <button onClick={startGame} className="start-button">
            Start Game
          </button>
          <div className="settings">
            <label>
              Difficulty:
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </label>
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </div>
        </div>
      ) : gameOver ? (
        <div className="game-over">
          <h2>Game Over!</h2>
          <p>Your final score is: {score}</p>
          <p>High Score: {highScore}</p>
          <button onClick={startGame}>Play Again</button>
        </div>
      ) : (
        <>
          <div className="game-info">
            <p>Time Left: {timeLeft} seconds</p>
            <p>Score: {score}</p>
          </div>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${(timeLeft / 30) * 100}%` }}
            ></div>
          </div>
          <div className="scrambled-word">
            {scrambledWord.split("").map((letter, index) => (
              <div key={index} className="letter-tile">
                {letter}
              </div>
            ))}
          </div>
          <form onSubmit={handleGuess}>
            <input
              type="text"
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
              placeholder="Enter your guess"
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={stopGame} className="stop-button">
              Stop Game
            </button>
          </form>
          {feedback && <p className="feedback">{feedback}</p>}
          <button
            onClick={() => setShowHint(true)}
            className="hint-button"
          >
            💡 Show Hint
          </button>
          {showHint && <p className="hint">Hint: {hint}</p>}
        </>
      )}
    </div>
  );
}


export default App;