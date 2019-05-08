__Create a new promocode__

curl -X POST 'http://localhost:8765/api/promocode' -H "Content-Type: application/json" -d '{"name":"WeatherCode","avantage":{"percent":20},"restrictions":{"$or":[{"age":40},{"age":{"$lt":35,"$gt":15}}],"meteo.is":"clear","meteo.temp":{"$gt":15}}}'

__Get authorization for a promocode__

curl -X POST 'http://localhost:8765/api/reduction' -H "Content-Type: application/json" -d '{"promocode_name":"WeatherCode","arguments":{"age":"24"}}'