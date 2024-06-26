import BuyingCard from "../components/BuyingCard";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";
const items = []

export default function Buy() {
    const {loading, data} = useQuery(QUERY_USERS)
    const users = data?.users||[]
    console.log(users)

    if (!loading) {
        users.map(user => {
            return user.items.map(item => {
                if (items.includes(item.itemName) === false) {
                    items.push(item);
                }
            })
        })
    }

    return (
        <>
        {console.log(items)}
            <BuyingCard items={items} loading={loading}/>
        </>
    )
}