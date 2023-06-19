import { GiBurningMeteor, GiBodyHeight, GiWeightLiftingUp, GiCycling, GiHiking } from 'react-icons/gi';
import { FaChild, FaRunning, FaSwimmer } from "react-icons/fa";
import { MdSportsGymnastics } from "react-icons/md";
const jsonData = {
    "user": {
        "id": "123456",
        "name": "John Doe",
        "email": "johndoe@example.com",
        "age": 30,
        "height": 180,
        "weight": 75,
        "loss-weight": 60
    },
    "activities": [
        {
            "id": "activity_1",
            "name": "Running",
            "icon": <FaRunning size={'45px'} />,
            "date": "2023-06-08",
            "duration": 45,
            "distance": 6.2,
            "calories_burned": 500,
            "heart_rate": {
                "average": 50,
                "max": 75
            },
            "steps": 8000,
            "pace": {
                "average": 7.3,
                "best": 6.5
            },
            "elevation_gain": 80,
            "dailyActivity": [
                {
                    "id": "day_1",
                    "name": "day1",
                    "date": "2023-06-08",
                    "duration": 30,
                    "distance": 2.2,
                    "calories_burned": 200,
                    "heart_rate": {
                        "average": 60,
                        "max": 75
                    },
                    "steps": 4000,
                },
                {
                    "id": "day_2",
                    "name": "day2",
                    "date": "2023-06-09",
                    "duration": 40,
                    "distance": 4.2,
                    "calories_burned": 400,
                    "heart_rate": {
                        "average": 50,
                        "max": 60
                    },
                    "steps": 5000,
                },
                {
                    "id": "day_3",
                    "name": "day3",
                    "date": "2023-06-11",
                    "duration": 55,
                    "distance": 6.2,
                    "calories_burned": 100,
                    "heart_rate": {
                        "average": 40,
                        "max": 70
                    },
                    "steps": 8000,
                },
                {
                    "id": "day_4",
                    "name": "day4",
                    "date": "2023-06-12",
                    "duration": 30,
                    "distance": 1.2,
                    "calories_burned": 100,
                    "heart_rate": {
                        "average": 60,
                        "max": 90
                    },
                    "steps": 2000,
                },
                {
                    "id": "day_5",
                    "name": "day5",
                    "date": "2023-06-13",
                    "duration": 40,
                    "distance": 6.2,
                    "calories_burned": 120,
                    "heart_rate": {
                        "average": 80,
                        "max": 90
                    },
                    "steps": 8000,
                },
                {
                    "id": "day_6",
                    "name": "day6",
                    "date": "2023-06-14",
                    "duration": 55,
                    "distance": 6.2,
                    "calories_burned": 200,
                    "heart_rate": {
                        "average": 40,
                        "max": 70
                    },
                    "steps": 8000,
                }
                , {
                    "id": "day_7",
                    "name": "day7",
                    "date": "2023-06-15",
                    "duration": 55,
                    "distance": 6.2,
                    "calories_burned": 200,
                    "heart_rate": {
                        "average": 40,
                        "max": 70
                    },
                    "steps": 8000,
                }
            ]
        },
        {
            "id": "activity_2",
            "name": "Cycling",
            "icon": <GiCycling size={'45px'} />,
            "date": "2023-06-07",
            "duration": 60,
            "distance": 15.3,
            "calories_burned": 700,
            "heart_rate": {
                "average": 60,
                "max": 80
            },
            "steps": 5000,
            "speed": {
                "average": 25.5,
                "max": 32.8
            },
            "elevation_gain": 120,
            "dailyActivity": [
                {
                    "id": "day_1",
                    "name": "day1",
                    "date": "2023-06-08",
                    "duration": 30,
                    "distance": 9.2,
                    "calories_burned": 200,
                    "heart_rate": {
                        "average": 60,
                        "max": 75
                    },
                    "steps": 4000,
                },
                {
                    "id": "day_2",
                    "name": "day2",
                    "date": "2023-06-09",
                    "duration": 40,
                    "distance": 7.2,
                    "calories_burned": 400,
                    "heart_rate": {
                        "average": 50,
                        "max": 60
                    },
                    "steps": 5000,
                },
                {
                    "id": "day_3",
                    "name": "day3",
                    "date": "2023-06-11",
                    "duration": 55,
                    "distance": 5.2,
                    "calories_burned": 100,
                    "heart_rate": {
                        "average": 40,
                        "max": 70
                    },
                    "steps": 8000,
                },
                {
                    "id": "day_4",
                    "name": "day4",
                    "date": "2023-06-12",
                    "duration": 30,
                    "distance": 8.2,
                    "calories_burned": 100,
                    "heart_rate": {
                        "average": 60,
                        "max": 90
                    },
                    "steps": 2000,
                },
                {
                    "id": "day_5",
                    "name": "day5",
                    "date": "2023-06-13",
                    "duration": 40,
                    "distance": 6.2,
                    "calories_burned": 120,
                    "heart_rate": {
                        "average": 80,
                        "max": 90
                    },
                    "steps": 8000,
                },
                {
                    "id": "day_6",
                    "name": "day6",
                    "date": "2023-06-14",
                    "duration": 55,
                    "distance": 8.2,
                    "calories_burned": 200,
                    "heart_rate": {
                        "average": 40,
                        "max": 70
                    },
                    "steps": 8000,
                }
                , {
                    "id": "day_7",
                    "name": "day7",
                    "date": "2023-06-15",
                    "duration": 55,
                    "distance": 8.2,
                    "calories_burned": 200,
                    "heart_rate": {
                        "average": 40,
                        "max": 70
                    },
                    "steps": 8000,
                }
            ]

        },
        {
            "id": "activity_3",
            "name": "Strength Training",
            "icon": <MdSportsGymnastics size={'45px'} />,
            "date": "2023-06-06",
            "duration": 75,
            "calories_burned": 400,
            "heart_rate": {
                "average": 20,
                "max": 15
            },
            "reps": {
                "total": 120,
                "sets": 3,
                "average_per_set": 40
            },
            "weight_lifted": {
                "total": 2000,
                "average_per_rep": 16.7
            },
            "dailyActivity": [
                {
                    "id": "day_1",
                    "name": "day1",
                    "date": "2023-06-08",
                    "duration": 30,
                    "distance": 2.2,
                    "calories_burned": 200,
                    "heart_rate": {
                        "average": 60,
                        "max": 75
                    },
                },
                {
                    "id": "day_2",
                    "name": "day2",
                    "date": "2023-06-09",
                    "duration": 40,
                    "distance": 4.2,
                    "calories_burned": 400,
                    "heart_rate": {
                        "average": 50,
                        "max": 60
                    },

                },
                {
                    "id": "day_3",
                    "name": "day3",
                    "date": "2023-06-11",
                    "duration": 55,
                    "distance": 6.2,
                    "calories_burned": 100,
                    "heart_rate": {
                        "average": 40,
                        "max": 70
                    },

                },
                {
                    "id": "day_4",
                    "name": "day4",
                    "date": "2023-06-12",
                    "duration": 30,
                    "distance": 1.2,
                    "calories_burned": 100,
                    "heart_rate": {
                        "average": 60,
                        "max": 90
                    },

                },
                {
                    "id": "day_5",
                    "name": "day5",
                    "date": "2023-06-13",
                    "duration": 40,
                    "distance": 6.2,
                    "calories_burned": 120,
                    "heart_rate": {
                        "average": 80,
                        "max": 90
                    },

                },
                {
                    "id": "day_6",
                    "name": "day6",
                    "date": "2023-06-14",
                    "duration": 55,
                    "distance": 6.2,
                    "calories_burned": 200,
                    "heart_rate": {
                        "average": 40,
                        "max": 70
                    },

                }
                , {
                    "id": "day_7",
                    "name": "day7",
                    "date": "2023-06-15",
                    "duration": 55,
                    "distance": 6.2,
                    "calories_burned": 200,
                    "heart_rate": {
                        "average": 40,
                        "max": 70
                    },
                    "steps": 8000,
                }
            ]
        },
        {
            "id": "activity_4",
            "name": "Swimming",
            "icon": <FaSwimmer size={'45px'} />,
            "date": "2023-06-05",
            "duration": 60,
            "distance": 1.5,
            "calories_burned": 350,
            "heart_rate": {
                "average": 60,
                "max": 70
            },
            "laps": 20,
            "pool_length": 25,
            "dailyActivity": [
                {
                    "id": "day_1",
                    "name": "day1",
                    "date": "2023-06-08",
                    "duration": 30,
                    "distance": 2.2,
                    "calories_burned": 200,
                    "heart_rate": {
                        "average": 60,
                        "max": 75
                    },
                },
                {
                    "id": "day_2",
                    "name": "day2",
                    "date": "2023-06-09",
                    "duration": 40,
                    "distance": 4.2,
                    "calories_burned": 400,
                    "heart_rate": {
                        "average": 50,
                        "max": 60
                    },

                },
                {
                    "id": "day_3",
                    "name": "day3",
                    "date": "2023-06-11",
                    "duration": 55,
                    "distance": 6.2,
                    "calories_burned": 100,
                    "heart_rate": {
                        "average": 40,
                        "max": 70
                    },

                },
                {
                    "id": "day_4",
                    "name": "day4",
                    "date": "2023-06-12",
                    "duration": 30,
                    "distance": 1.2,
                    "calories_burned": 100,
                    "heart_rate": {
                        "average": 60,
                        "max": 90
                    },

                },
                {
                    "id": "day_5",
                    "name": "day5",
                    "date": "2023-06-13",
                    "duration": 40,
                    "distance": 6.2,
                    "calories_burned": 120,
                    "heart_rate": {
                        "average": 80,
                        "max": 90
                    },

                },
                {
                    "id": "day_6",
                    "name": "day6",
                    "date": "2023-06-14",
                    "duration": 55,
                    "distance": 6.2,
                    "calories_burned": 200,
                    "heart_rate": {
                        "average": 40,
                        "max": 70
                    },

                }
                , {
                    "id": "day_7",
                    "name": "day7",
                    "date": "2023-06-15",
                    "duration": 55,
                    "distance": 6.2,
                    "calories_burned": 200,
                    "heart_rate": {
                        "average": 40,
                        "max": 70
                    },
                    "steps": 8000,
                }
            ]
        },

        {
            "id": "activity_5",
            "name": "Hiking",
            "icon": <GiHiking size={'45px'} />,
            "date": "2023-06-04",
            "duration": 120,
            "distance": 8.5,
            "calories_burned": 600,
            "heart_rate": {
                "average": 100,
                "max": 150
            },
            "elevation_gain": 450,
            "dailyActivity": [
                {
                    "id": "day_1",
                    "name": "day1",
                    "date": "2023-06-08",
                    "duration": 30,
                    "distance": 2.2,
                    "calories_burned": 200,
                    "heart_rate": {
                        "average": 60,
                        "max": 75
                    },
                },
                {
                    "id": "day_2",
                    "name": "day2",
                    "date": "2023-06-09",
                    "duration": 40,
                    "distance": 4.2,
                    "calories_burned": 400,
                    "heart_rate": {
                        "average": 50,
                        "max": 60
                    },

                },
                {
                    "id": "day_3",
                    "name": "day3",
                    "date": "2023-06-11",
                    "duration": 55,
                    "distance": 6.2,
                    "calories_burned": 100,
                    "heart_rate": {
                        "average": 40,
                        "max": 70
                    },

                },
                {
                    "id": "day_4",
                    "name": "day4",
                    "date": "2023-06-12",
                    "duration": 30,
                    "distance": 1.2,
                    "calories_burned": 100,
                    "heart_rate": {
                        "average": 60,
                        "max": 90
                    },

                },
                {
                    "id": "day_5",
                    "name": "day5",
                    "date": "2023-06-13",
                    "duration": 40,
                    "distance": 6.2,
                    "calories_burned": 120,
                    "heart_rate": {
                        "average": 80,
                        "max": 90
                    },

                },
                {
                    "id": "day_6",
                    "name": "day6",
                    "date": "2023-06-14",
                    "duration": 55,
                    "distance": 6.2,
                    "calories_burned": 200,
                    "heart_rate": {
                        "average": 40,
                        "max": 70
                    },

                }
                , {
                    "id": "day_7",
                    "name": "day7",
                    "date": "2023-06-15",
                    "duration": 55,
                    "distance": 6.2,
                    "calories_burned": 200,
                    "heart_rate": {
                        "average": 40,
                        "max": 70
                    },
                    "steps": 8000,
                }
            ]
        },

    ]
}

export default jsonData;