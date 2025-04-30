import React from "react";

function Friends() {
  return (
    <div className="friends-section">
      <div className="friends-grid">
        {/* Winston */}
        <div className="friend-card">
          <img
            src="https://cdn.bhdw.net/im/john-wick-chapter-4-winston-wallpaper-114591_w635.webp"
            alt="Winston"
          />
          <div className="friend-details">
            <h2>Winston</h2>
            <h4>Continental Manager</h4>
            <p>
              A father figure, Winston offers John guidance and protection
              despite High Table pressure.
            </p>
          </div>
        </div>

        {/* Charon */}
        <div className="friend-card">
          <img
            src="https://imgix.bustle.com/uploads/image/2023/3/20/2ea090ce-b136-4198-b957-18a32bc51c6c-jw-06569-r.jpg?w=564&h=564&fit=crop&crop=faces"
            alt="Charon"
          />
          <div className="friend-details">
            <h2>Charon</h2>
            <h4>Concierge</h4>
            <p>
              Shares quiet respect with John and cares for his dog during times
              of crisis.
            </p>
          </div>
        </div>

        {/* Marcus */}
        <div className="friend-card">
          <img
            src="https://static0.srcdn.com/wordpress/wp-content/uploads/2024/10/marcus2.jpg?q=49&fit=crop&w=750&h=422&dpr=2"
            alt="Marcus"
          />
          <div className="friend-details">
            <h2>Marcus</h2>
            <h4>Veteran Assassin</h4>
            <p>
              Mentor and ally who saved John multiple times before dying at
              Viggo’s hands.
            </p>
          </div>
        </div>
        {/* Sofia Al-Azwar */}
        <div className="friend-card">
          <img
            src="https://www.joblo.com/wp-content/uploads/2024/09/halle-berry-john-wick-spinoff.jpg"
            alt="Marcus"
          />
          <div className="friend-details">
            <h2>Sofia Al-Azwar</h2>
            <h4>Continental Manager</h4>
            <p>
              Manager of the Moroccan Continental, Sofia owes John a blood oath
              for saving her daughter, their trust unwavering.
            </p>
          </div>
        </div>

        {/* Caine */}
        <div className="friend-card">
          <img
            src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20240516051533.jpg"
            alt="Marcus"
          />
          <div className="friend-details">
            <h2>Caine</h2>
            <h4>blind assassin</h4>
            <p>
              A blind swordsman and assassin, Caine’s brotherly bond with John
              persists despite being forced to hunt him, culminating in John
              sparing his life.
            </p>
          </div>
        </div>
        {/* Koji Shimazu*/}
        <div className="friend-card">
          <img
            src="https://i1.wp.com/pocculture.com/wp-content/uploads/2023/03/Copy-of-Copy-of-Bloom-Li-min-1-e1679622773480.png?w=1080&ssl=1"
            alt="Marcus"
          />
          <div className="friend-details">
            <h2>SKoji Shimazu</h2>
            <h4>Continental Manager</h4>
            <p>
              Osaka Continental manager and close friend, Koji sacrifices
              himself to protect John from the High Table
            </p>
          </div>
        </div>
        {/* Bowery King */}
        <div className="friend-card">
          <img
            src="https://static0.srcdn.com/wordpress/wp-content/uploads/2023/11/bowery-king-1.jpg?q=49&fit=crop&w=750&h=422&dpr=2"
            alt="Marcus"
          />
          <div className="friend-details">
            <h2>Bowery King</h2>
            <h4>Leader of underground network</h4>
            <p>
              Leader of an underground network, he aids John’s rebellion against
              the High Table with resources and intel.
            </p>
          </div>
        </div>
        {/* Aurelio */}
        <div className="friend-card">
          <img
            src="https://fwmedia.fandomwire.com/wp-content/uploads/2024/06/10045926/john.webp"
            alt="Marcus"
          />
          <div className="friend-details">
            <h2>Aurelio</h2>
            <h4>chop shop owner</h4>
            <p>
              A chop shop owner, Aurelio’s loyalty shines when he refuses to
              service John’s stolen car, respecting his reputation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Friends;
