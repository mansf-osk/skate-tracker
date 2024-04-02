package main

import (
	"net/http"
)

func (app *application) routes() http.Handler {
	mux := http.NewServeMux()

	mux.HandleFunc("GET /v1/healthcheck", app.healthcheckHandler)
	mux.HandleFunc("GET /v1/grinds-and-slides", app.readGrindsAndSlidesHandler)
	mux.HandleFunc("POST /v1/grinds-and-slides", app.createGrindOrSlideHandler)
	mux.HandleFunc("GET /v1/flips", app.readFlipsHandler)
	mux.HandleFunc("POST /v1/flips", app.createFlipHandler)

	return mux
}
