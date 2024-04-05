package data

// Custom ID datatype with NewId method for incrementing IDs.
type id int64

func (id *id) NewId() id {
	*id += 1
	return *id
}

// Trick datatype to represent json format.
type Trick struct {
	ID         id     `json:"id"`
	Name       string `json:"name"`
	Difficulty string `json:"difficulty"`
	Learned    bool   `json:"learned"`
	Clip       string `json:"clip,omitempty"`
}

// Initial Flips data.
var FlipId id = 0

var Flips = []Trick{
	{
		ID:         FlipId.NewId(),
		Name:       "kickflip",
		Difficulty: "easy",
		Learned:    true,
		Clip:       "QxhxjUKvpv0",
	},
	{
		ID:         FlipId.NewId(),
		Name:       "heelflip",
		Difficulty: "easy",
		Learned:    false,
	},
}

// Initial Grind and Slide data.
var GrindAndSlideId id = 0

var GrindsAndSlides = []Trick{
	{
		ID:         GrindAndSlideId.NewId(),
		Name:       "50-50",
		Difficulty: "easy",
		Learned:    true,
		Clip:       "xYg4ertEUeo?si=RTVbsdpInqjHn5uy&amp;start=356",
	},
	{
		ID:         GrindAndSlideId.NewId(),
		Name:       "bs smith",
		Difficulty: "hard",
		Learned:    false,
	},
}
