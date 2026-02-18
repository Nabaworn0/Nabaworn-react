function ClickEvent() {

    const ClickHandler = (event) => {
        window.alert(event.target.innerHTML);
    }


    return (
        <div>
            <button onClick={(e) => ClickHandler(e)}>Click Me</button>
        </div>
    );
}
export default ClickEvent;