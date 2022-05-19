import Avatar from "./Avatar";
import Autor from "./Author";
import Time from "./Time";
import Message from "./Message";
import { LikeIcon, MoreOptionButton, replyIcon, RetweetIcon } from "./iconButtons";


const Tweet = () => (
    < div className="flex items-center border border-gray-300 m-8">
            <Avatar/>
         <div className="space-y-1 text-lg font-medium leading-6"/>
            <Autor />
            <Time/>
            <Message/>
            <div className="flex pt-3 space-x-3">
            <replyIcon/>
            <RetweetIcon/>
            <LikeIcon/>
            <MoreOptionButton/>
            </div>
        </div>
);

export default Tweet;