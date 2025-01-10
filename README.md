# Parking System Server

## Environment Variables

The table below shows the environment variables needed by the server to run completely.

| Env          | Type   | Purpose                       |
| ------------ | ------ | ----------------------------- |
| PORT         | number | Port number                   |
| DATABASE_URL | string | Connection to database        |
| URL          | string | The frontend URL for CORS     |
| SESSION_KEY  | string | Session Key Configuration     |
| API_KEY      | string | Required to access the server |

## API Key

The header key value for API key is **x-api-key**.
