import {GiBurningMeteor,GiBodyHeight,GiWeightLiftingUp,GiCycling,GiHiking} from 'react-icons/gi';
import { FaChild,FaRunning,FaSwimmer } from "react-icons/fa";
import { MdSportsGymnastics} from "react-icons/md";
const jsonData = {
    "user": {
        "id": "123456",
        "name": "John Doe",
        "email": "johndoe@example.com",
        "age": 30,
        "height": 180,
        "weight": 75,
        "loss-weight":60
    },
    "activities": [
        {
            "id": "activity_1",
            "name": "Running",
            "icon":<FaRunning size={'35px'}/>,
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
            "elevation_gain": 80
        },
        {
            "id": "activity_2",
            "name": "Cycling",
            "icon":<GiCycling size={'35px'}/>,
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
            "elevation_gain": 120
        },
        {
            "id": "activity_3",
            "name": "Strength Training",
            "icon":<MdSportsGymnastics size={'35px'}/>,
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
            }
        },
        {
            "id": "activity_4",
            "name": "Swimming",
            "icon":<FaSwimmer size={'35px'}/>,
            "date": "2023-06-05",
            "duration": 60,
            "distance": 1.5,
            "calories_burned": 350,
            "heart_rate": {
                "average": 60,
                "max": 70
            },
            "laps": 20,
            "pool_length": 25
        },
        {
            "id": "activity_5",
            "name": "Hiking",
            "icon":<GiHiking     size={'35px'}/>,
            "date": "2023-06-04",
            "duration": 120,
            "distance": 8.5,
            "calories_burned": 600,
            "heart_rate": {
                "average": 100,
                "max": 150
            },
            "elevation_gain": 450
        },
    
    ]
}

export default jsonData;