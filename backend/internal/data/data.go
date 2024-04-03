package data

type id int64

func (id *id) NewId() id {
	*id += 1
	return *id
}

type Trick struct {
	ID         id     `json:"id"`
	Name       string `json:"name"`
	Difficulty string `json:"difficulty"`
	Learned    bool   `json:"learned"`
	Clip       string `json:"clip,omitempty"`
}

var FlipId id = 0

var Flips = []Trick{
	{
		ID:         FlipId.NewId(),
		Name:       "kickflip",
		Difficulty: "easy",
		Learned:    true,
		Clip:       "https://www.youtube.com/embed/QxhxjUKvpv0",
	},
	{
		ID:         FlipId.NewId(),
		Name:       "heelflip",
		Difficulty: "easy",
		Learned:    false,
	},
}

var GrindAndSlideId id = 0

var GrindsAndSlides = []Trick{
	{
		ID:         GrindAndSlideId.NewId(),
		Name:       "50-50",
		Difficulty: "easy",
		Learned:    true,
		Clip:       "https://www.youtube.com/embed/xYg4ertEUeo?si=RTVbsdpInqjHn5uy&amp;start=356",
	},
	{
		ID:         GrindAndSlideId.NewId(),
		Name:       "bs smith",
		Difficulty: "hard",
		Learned:    false,
	},
}
