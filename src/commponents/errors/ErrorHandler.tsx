
interface IProps {
    statusCode?: number;
    message?: string
}

const ErrorHandler = ({statusCode = 404, message="Server Error"}:IProps) => {

    return (
        <h2>{statusCode} - {message}</h2>
    )
}

export default ErrorHandler

