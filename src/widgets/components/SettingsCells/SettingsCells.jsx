import {List} from "@/shared/ui/List/List.jsx";
import {Cell} from "@/shared/ui/Cell/Cell.jsx";
import {Divider} from "@/shared/ui/Divider/Divider.jsx";

export function SettingsCells({ className, cells, ...restProps }) {
    return (
        <List className={className} {...restProps}>
            {cells.map((cell, index) =>
                <div key={cell.id}>
                    <Cell
                        before={<cell.before/>}
                        title={cell.title}
                        after={<cell.after/>}
                        navigationLabel={cell.navigationLabel}
                    />
                    {index < cells.length - 1 && <Divider/>}
                </div>
            )}
        </List>
    )
}