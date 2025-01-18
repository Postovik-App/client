import {Divider} from "@/shared/ui/Divider/Divider.jsx";
import {ChannelCell} from "@/entities/Channel/components/ChannelCell/ChannelCell.jsx";
import {useNavigate} from "react-router-dom";

export function ChannelsList({ channels }) {
    const navigate = useNavigate();

    return (
        <div>
            {channels.map((channel, index) => (
                <div key={channel.id}>
                    <ChannelCell
                        name={channel.title}
                        subscribersCount={channel.subscribersCount}
                        onClick={() => navigate('/channels/info')}
                    />
                    {index < channels.length - 1 && <Divider />}
                </div>
            ))}
        </div>
    )
}