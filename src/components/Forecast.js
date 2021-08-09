import {Hook1} from '../customHooks/Hook1';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export const Forecast = ({...props}) => {
    const hook = Hook1(props.forecast === null ? [] : props.forecast.forecastday);
    const [info1] = hook;

    console.log(info1)
    
    return (
        <div className="container">
          {info1.info0 !== undefined ? info1.info0.hour.map(info =>
            <Card className="cards">
                <CardContent>
                    <img src={info.condition.icon} alt="weathericon"/>
                    <h4>Date: {info.time.slice(0, 10)}</h4>
                    <h4>Time: {info.time.slice(11)}</h4>
                    <h5>Temp: {((info.temp_c * 9/5) + 32).toFixed(2)}F</h5>
                    <h5>Chance of Rain: {info.chance_of_rain}%</h5>
                    {console.log(info)}
                </CardContent> 
            </Card>
            ) : ""}
        </div>
    )
}