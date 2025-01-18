import {Divider} from "@/shared/ui/Divider/Divider.jsx";
import {ChannelCell} from "@/entities/Channel/components/ChannelCell/ChannelCell.jsx";

export function ChannelsList({ channels }) {
    return (
        <div>
            {channels.map((channel, index) => (
                <div key={channel.id}>
                    <ChannelCell
                        name={channel.title}
                        subscribersCount={channel.subscribersCount}
                    />
                    {index < channels.length - 1 && <Divider />}
                </div>
            ))}
        </div>
    )
}