import Script from 'next/script'

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold">Calorie Counter</h1>
      <div class="container" className=''>
        <form id="calorie-counter">
          <label for="budget" className='text-2xl'>Budget:</label>
          <input
            type="number"
            min="0"
            id="budget"
            placeholder="Daily calorie budget"
            required
            className='rounded-lg p-2 m-2'
          />
          <fieldset id="breakfast" className='border-2 p-2 rounded-lg'>
            <legend className='p-1 text-2xl'>Breakfast</legend>
            <div class="input-container"></div>
          </fieldset>
          <fieldset id="lunch" className='border-2 p-2 rounded-lg'>
            <legend className='p-1 text-2xl'>Lunch</legend>
            <div class="input-container"></div>
          </fieldset>
          <fieldset id="dinner" className='border-2 p-2 rounded-lg'>
            <legend className='p-1 text-2xl'>Dinner</legend>
            <div class="input-container"></div>
          </fieldset>
          <fieldset id="snacks" className='border-2 p-2 rounded-lg'>
            <legend className='p-1 text-2xl'>Snacks</legend>
            <div class="input-container"></div>
          </fieldset>
          <fieldset id="exercise" className='border-2 p-2 rounded-lg'>
            <legend className='p-1 text-2xl'>Exercise</legend>
            <div class="input-container"></div>
          </fieldset>
          <div class="controls">
            <span>
              <label for="entry-dropdown" className='mr-2 text-2xl'>Add food or exercise:</label>
              <select id="entry-dropdown" name="options" className='rounded-lg p-2 m-2'>
                <option value="breakfast" selected>Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snacks">Snacks</option>
                <option value="exercise">Exercise</option>
              </select>
              <button type="button" id="add-entry" className='rounded-lg p-2 m-2 '>Add Entry</button>
            </span>
          </div>
          <div>
            <button type="submit" className='rounded-lg p-2 mr-2'>
              Calculate Remaining Calories
            </button>
            <button type="button" id="clear" className='rounded-lg p-2 '>Clear</button>
          </div>
        </form>
        <div id="output" class="output hide" className='rounded-lg border-2 p-2 mt-4'></div>
      </div>
      <Script src="./script.js" strategy="beforeInteractive" />
    </main>
  );
}
