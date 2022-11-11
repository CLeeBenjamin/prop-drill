import Button from "./Button";


export default function Toolbar(props){
    const {theme} = props
    
    return (
        <div>
            <Button theme={theme} label="Button 1"/>
            <Button theme={theme} label="Button 2"/>
        </div>

    )
}