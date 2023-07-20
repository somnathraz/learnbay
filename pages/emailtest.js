import { useState } from 'react';

const Home = () => {
  const [email, setEmail] = useState('');
  const [res, setRes] = useState(null);
  const apiKey = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;
  const apiUrl = 'https://mailcheck.p.rapidapi.com/';

  const checkValidity = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'mailcheck.p.rapidapi.com',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      
      }

      const data = await response.json();
      setRes(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Email <span className="text-secondary">Validator</span> App
      </h2>
      <h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Check if an email address exists or not
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <form
          className="flex w-full justify-center md:flex-col md:w-5/6"
          onSubmit={(e) => checkValidity(e)}
        >
          <input
            autoFocus={true}
            type="email"
            className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
            placeholder="Enter the email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4"
          >
            Validate
          </button>
        </form>
        {res && (
          <div className="flex flex-col text-primary text-raleway mt-12 w-3/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
            <table className="bg-white w-full text-primary mb-8 md:text-sm md:mx-2">
              <thead className="font-raleway uppercase tracking-wide">
                <tr>
                  <th className="border text-left px-4 py-4">
                    <span className="text-secondary">Information</span>
                  </th>
                  <th className="border text-left px-4 py-4">
                    <span className="text-secondary">Result</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-4">Valid</td>
                  <td className="border px-4 py-4 capitalize">
                    {res.valid.toString()}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-4">Disposable</td>
                  <td className="border px-4 py-4 capitalize">
                    {res.disposable.toString()}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-4">Domain</td>
                  <td className="border px-4 py-4">{res.domain}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-4">Text</td>
                  <td className="border px-4 py-4">{res.text}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-4">Reason</td>
                  <td className="border px-4 py-4">{res.reason}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;