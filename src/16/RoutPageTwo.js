import { useSearchParams } from "react-router-dom"
export default function RoutPageTwo() {
  const [params] = useSearchParams();
  const var1 = params.get('item1');
  const var2 = params.get('item2');
  const var3 = params.get('item3');
  return (
    <div>
      pageTwo : {var1} & {var2} & {var3}
    </div>
  )
}
