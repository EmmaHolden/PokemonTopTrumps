import { ReactNode } from "react"

interface TooltipProps {
    tooltipContent: string
    children: ReactNode | ReactNode[]
}

const Tooltip = ({tooltipContent, children}: TooltipProps) => {

    return ( 
        <div className="tooltip">
            {children}
            <span className="tooltiptext">{tooltipContent}</span>
        </div>
     );
}
 
export default Tooltip;