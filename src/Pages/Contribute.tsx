import { useLocation } from "react-router-dom"
import Button from "../commponents/ui/Button"
import Textarea from "../commponents/ui/Textarea"

const ContributePage = () => {
    const {state} = useLocation();
    return (
        <div>
            <h2 className="text-center mb-3">Email: {state.email}</h2>
            <h2 className="text-center mb-3">Issue: Bug Report</h2>
            <form className="space-y-3 max-w-sm mx-auto">
                <Textarea/>
                <Button>Submit new issue</Button>
            </form>
        </div>
    )
}

export default ContributePage

