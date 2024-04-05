package main

import (
	"net/http"

	"github.com/mansf-osk/skate-tracker/backend/internal/data"
)

// Healthcheck handler for testing purposes.
func (app *application) healthcheckHandler(w http.ResponseWriter, r *http.Request) {
	data := map[string]string{
		"status":      "available",
		"environment": app.config.env,
		"version":     version,
	}

	err := app.writeJson(w, http.StatusOK, data, nil)
	if err != nil {
		app.logger.Error(err.Error())
		http.Error(w, "Internal server error", http.StatusInternalServerError)
	}
}

// -------------------------------------
// Handlers for GRINDS AND SLIDES
// -------------------------------------
func (app *application) readGrindsAndSlidesHandler(w http.ResponseWriter, r *http.Request) {
	err := app.writeJson(w, http.StatusOK, data.GrindsAndSlides, nil)
	if err != nil {
		app.logger.Error(err.Error())
		http.Error(w, "internal server error", http.StatusInternalServerError)
	}
}

func (app *application) createGrindOrSlideHandler(w http.ResponseWriter, r *http.Request) {
	var newTrick data.Trick

	err := app.parseTrickJson(r, &newTrick)
	if err != nil {
		app.logger.Error(err.Error())
		http.Error(w, "Internal server error", http.StatusInternalServerError)
	}
	newTrick.ID = data.GrindAndSlideId.NewId()

	data.GrindsAndSlides = append(data.GrindsAndSlides, newTrick)
	app.writeJson(w, http.StatusCreated, newTrick, nil)
}

// -------------------------------------
// Handlers for FLIPS
// -------------------------------------
func (app *application) readFlipsHandler(w http.ResponseWriter, r *http.Request) {
	err := app.writeJson(w, http.StatusOK, data.Flips, nil)
	if err != nil {
		app.logger.Error(err.Error())
		http.Error(w, "internal server error", http.StatusInternalServerError)
	}
}

func (app *application) createFlipHandler(w http.ResponseWriter, r *http.Request) {
	var newTrick data.Trick

	err := app.parseTrickJson(r, &newTrick)
	if err != nil {
		app.logger.Error(err.Error())
		http.Error(w, "Internal server error", http.StatusInternalServerError)
	}
	newTrick.ID = data.FlipId.NewId()

	data.Flips = append(data.Flips, newTrick)
	app.writeJson(w, http.StatusCreated, newTrick, nil)
}
