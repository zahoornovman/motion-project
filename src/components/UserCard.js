

function UserCard(props){

    return (
        <div>
            <div>
                <img src={props.obj.avatar} alt='Avatar'/>
                <div>
                    <span>{props.obj.first_name}{props.obj.last_name}</span>
                </div>
                <div>
                    <span>{props.obj.location}</span>
                </div>
            </div>
        </div>
    )
}


export { UserCard }

/* example obj
{
            "id": 809,
            "email": "juans@propulsionacademy.com",
            "first_name": "Juan Miguel",
            "last_name": "Sánchez Arce",
            "username": "JuanMiguelSanchezArce",
            "job": "",
            "avatar": "https://motion.propulsion-home.ch/media-files/JMSA_WhiteBackground.png",
            "banner": "https://motion.propulsion-home.ch/media-files/Groot_Revenge.jpg",
            "location": "",
            "about_me": "",
            "things_user_likes": [],
            "logged_in_user_is_following": false,
            "logged_in_user_is_friends": false,
            "logged_in_user_is_rejected": false,
            "logged_in_user_received_fr": false,
            "logged_in_user_sent_fr": false,
            "amount_of_posts": 0,
            "amount_of_likes": 0,
            "amount_of_friends": 2,
            "amount_of_followers": 7,
            "amount_following": 0
        },
        {
            "id": 765,
            "email": "vjss05@gmail.com",
            "first_name": "Tinaa",
            "last_name": "Sulbarán",
            "username": "tunaaaa",
            "job": "Software Developer",
            "avatar": "https://motion.propulsion-home.ch/media-files/images_LKZtmyn.png",
            "banner": "https://motion.propulsion-home.ch/media-files/20e2d3e994192791aa30b506aa36eb41.jpeg",
            "location": "Somewhere",
            "about_me": "",
            "things_user_likes": [
                "Coding",
                "fbfbfgnfgnh",
                "fbdfbdbdbd",
                "97ot79ot"
            ],
            "logged_in_user_is_following": false,
            "logged_in_user_is_friends": false,
            "logged_in_user_is_rejected": false,
            "logged_in_user_received_fr": false,
            "logged_in_user_sent_fr": false,
            "amount_of_posts": 69,
            "amount_of_likes": 11,
            "amount_of_friends": 1,
            "amount_of_followers": 4,
            "amount_following": 0
        },
 */