const assetImg = process.env.NEXT_PUBLIC_ASSETS_URL

const PostCard = ({image, title, body}) => {
    return (
        <div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
            <img class="w-full" src={`${assetImg}/${image}`} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{title}</div>
                    <p class="text-grey-darker text-base">
                        {body}
                    </p>
                </div>
        </div>
    )
}

export default PostCard