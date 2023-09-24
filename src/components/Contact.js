const Contact = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold p-4 m-4">Contact us!</h2>
      <form>
        <input
          type="text"
          className="m-2 p-2 border border-black"
          placeholder="Name"
        ></input>
        <input
          type="text"
          className="m-2 p-2 border border-black"
          placeholder="Message"
        ></input>
        <button className="p-2 bg-gray-100 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
