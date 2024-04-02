package main

import (
	"flag"
	"fmt"
	"log/slog"
	"net/http"
	"os"
	"time"
)

// API Version
const version = "1.0.0"

// Holds configuration settings. The settings will be read from cmd-Flags
type config struct {
	port int
	env  string
}

// Holds dependencies for our API
type application struct {
	config config
	logger *slog.Logger
}

func main() {
	var cfg config

	// Reads cmd-flags and fills the config struct
	flag.IntVar(&cfg.port, "port", 4000, "API server port")
	flag.StringVar(&cfg.env, "env", "development", "Environment of the running server")
	flag.Parse()

	// Declare logger that logs to stdout
	logger := slog.New(slog.NewTextHandler(os.Stdout, nil))

	app := &application{
		config: cfg,
		logger: logger,
	}

	// Declate HTTP server with sensible defaults that listens on provided port, uses the servemux created above and logs to the logger created above.
	srv := &http.Server{
		Addr:         fmt.Sprintf(":%d", cfg.port),
		Handler:      app.routes(),
		IdleTimeout:  time.Minute,
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 10 * time.Second,
		ErrorLog:     slog.NewLogLogger(logger.Handler(), slog.LevelError),
	}

	// Start the server
	logger.Info("starting server", "addr", srv.Addr, "env", cfg.env)
	err := srv.ListenAndServe()
	logger.Error(err.Error())
	os.Exit(1)
}
