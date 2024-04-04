import { useParams } from "react-router-dom"
export default function RoutPageOne() {
    const item = useParams().item;
  return (
    <div>
      pageOne : {item}
    </div>
  )
}
