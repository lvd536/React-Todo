export default function Modal() {
  return (
    <div className="flex fixed w-full h-full bg-black/30">
        <form action="">
            <label htmlFor="todoName"></label>
            <input type="text" id="todoName"/>
            <label htmlFor="todoDescription"></label>
            <input type="text" id="todoDescription"/>
            <label htmlFor="todoDate"></label>
            <input type="datetime-local" name="" id="todoDate"/>
            <button type="submit"></button>
        </form>
    </div>
  )
}
