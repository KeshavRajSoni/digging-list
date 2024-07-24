export default function Stats({ items }) {
    const totalItems = items.length;
    const packedItems = items.filter(item => item.packed).length;
    const packedPercentage = Math.round((packedItems / totalItems) * 100);
    return (
        <footer className='stats'>
            {packedPercentage === 100 ?
                <em>You are ready to Dig dip.</em>
                :
                totalItems === 0 ?
                    <em>Start adding some items to the list</em>
                    :
                    <em>You have {totalItems} items in the list. you have alredy added {`${packedItems} (${packedPercentage}%)`}.</em>
            }
        </footer>
    )
}
