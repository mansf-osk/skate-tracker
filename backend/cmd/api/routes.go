package main

import (
	"net/http"
)

func (app *application) routes() http.Handler {
	// Create ServeMux (the router).
	mux := http.NewServeMux()

	// Register endpoints.
	// Note the OPTIONS endpoints for preflight CORS requests during POST requests.
	mux.HandleFunc("GET /v1/healthcheck", app.healthcheckHandler)
	mux.Handle("GET /v1/grinds-and-slides", CORS(http.HandlerFunc(app.readGrindsAndSlidesHandler)))
	mux.Handle("POST /v1/grinds-and-slides", CORS(http.HandlerFunc(app.createGrindOrSlideHandler)))
	mux.Handle("OPTIONS /v1/grinds-and-slides", CORS(http.HandlerFunc(app.createGrindOrSlideHandler)))
	mux.Handle("GET /v1/flips", CORS(http.HandlerFunc(app.readFlipsHandler)))
	mux.Handle("POST /v1/flips", CORS(http.HandlerFunc(app.createFlipHandler)))
	mux.Handle("OPTIONS /v1/flips", CORS(http.HandlerFunc(app.createFlipHandler)))

	return mux
}
