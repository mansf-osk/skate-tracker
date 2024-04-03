package main

import (
	"encoding/json"
	"io"
	"net/http"

	"github.com/mansf-osk/skate-tracker/backend/internal/data"
)

func (app *application) writeJson(w http.ResponseWriter, status int, data any, headers http.Header) error {
	json, err := json.MarshalIndent(data, "", "\t")
	if err != nil {
		return err
	}

	json = append(json, '\n')

	for key, value := range headers {
		w.Header()[key] = value
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	w.Write(json)

	return nil
}

func (app *application) parseTrickJson(r *http.Request, trick *data.Trick) error {
	bodyBytes, _ := io.ReadAll(r.Body)

	err := json.Unmarshal(bodyBytes, &trick)
	if err != nil {
		return err
	}

	return nil
}
