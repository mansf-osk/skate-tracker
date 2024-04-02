# Build the application binary
FROM golang:1.22 AS build-stage

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . ./

RUN CGO_ENABLED=0 GOOS=linux go build -o /skate-tracker-backend ./cmd/api

# Deploy the binary into a lean image
FROM gcr.io/distroless/base-debian11 AS build-release-stage

WORKDIR /

COPY --from=build-stage /skate-tracker-backend /skate-tracker-backend

USER nonroot:nonroot

ENTRYPOINT [ "/skate-tracker-backend" ]
