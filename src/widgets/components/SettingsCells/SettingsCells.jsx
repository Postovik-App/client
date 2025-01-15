import {List} from "@/shared/ui/List/List.jsx";
import {Cell} from "@/shared/ui/Cell/Cell.jsx";
import {Divider} from "@/shared/ui/Divider/Divider.jsx";
import PersonIcon from "@/shared/assets/person.svg?react"
import ArrowRightIcon from "@/shared/assets/arrow-right.svg?react";
import {useNavigate} from "react-router-dom";

export function SettingsCells({ className, cells, ...restProps }) {
    const navigate = useNavigate()

    return (
        <div className={className} {...restProps}>
            <List>
                <Cell
                    before={<PersonIcon/>}
                    after={<ArrowRightIcon/>}
                    title={'Account'}
                    onClick={() => navigate('/settings/account')}
                />
            </List>
            <List>
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
        </div>
    )
}