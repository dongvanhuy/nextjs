'use client'
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const  DemoComponent = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push("/");
    }
    return (
        <>
            Component Demo !
            <div>
                <Button variant="success">Hoi Dan IT</Button>
                <button onClick={() => handleClick()}>Back Home</button>
            </div>
        </>
    )
}
export default DemoComponent;