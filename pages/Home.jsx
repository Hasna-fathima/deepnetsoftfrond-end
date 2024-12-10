import '../src/index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Home() {
  return (
    <main className='main-cont'>
    <div className='Home'>
        <div className='home1'>
          <div className='homehead'>
        <h1>MENU</h1></div>
        <p>please take a look at our menu featuring food, drinks, and brunch. if you'd like to <br/> place an order,user the "Order Online" button located below the menu</p>
        </div>
          <div className='order '><button className='button'>FOOD</button><button className='button'>DRINKS</button><button className='button'>BRUNCH</button></div>
        

          <div className="topmenu">
  <div className="innermenu">
    <h1>_ BRUNCH COCKTAILS _</h1>
    <ul>
      <li className="homehead">
        <span>CINNAMON TOAST CRUNCH ..................$16</span>
        <p>Skrewball peanut butter whiskey, vanilla extract, <br />
           Amaretto, Baileys, egg white, cinnamon</p>
      </li>
      <li className="homehead">
        <span>Bar 42 Mary.................................$16</span>
        <p>Titos, tomato juice, Worcestershire, celery salt, black <br />
           Amaretto, Baileys, egg white, cinnamon</p>
      </li>
      <li className="homehead">
        <span>Moset Spritz...........................................$16</span>
        <p>Aperol, St Germain, botanic liquor, fresh lime juice, <br />
           Mimi paper, tabasco, fully loaded</p>
      </li>
    </ul>
  </div>
</div>
</div>
</main>



  );
}
export default Home;