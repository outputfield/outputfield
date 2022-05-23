import Artist from './artist'
import Work from './work'
import Link from './link'

/*
__ARTIST
name:               string;
handle:             string;
iconColor:          string;
medium:             string;
location:           string;
email?:             string;
pronouns?:          string;
works?:             Work[];
bio?:               string;
mediums?:           string[];
mediumsOfInterest?: string[];
links?:             Link[];
referredBy?:        Artist;
*/

/*
__MEDIUMS
sculpture
tattoo
installation
performance
visual
textile
3d
design
photo / film
movement
sound
*/

class artistlist{
  artists: Artist[]

  constructor(artists : Artist[]){
    this.artists = artists
  }

  push(artist: Artist){
    this.artists[this.artists.length] = artist
  }

  get(handle: any){
    let found = false
    for(let i=0; i<this.artists.length; i++){
      if(!found && this.artists[i].handle==handle){
        found = true
        return this.artists[i]
      }
    }
  }
}

const artistdata = new artistlist(
  [
    // local file for testing until database interface is complete

    // need proper test data, get details from discord participants?
    // this is randomly generated info with stock photos

    new Artist(
      'Ibrahim Hopkins',
      'hopkins_art',
      '#ff00ff',
      'sculpture',
      'Chicago',
      'email@email.com',
      'he/him',
      [
        new Work('image','/works/s-l1600.jpg'),
        new Work('image','/works/71w2KeTHRKL._AC_SL1200_.jpg'),
        new Work('image','/works/138399600-bronze-sculpture-of-children-in-the-square-eastern-europe-kiev.jpg'),
        new Work('image','/works/vigeland-Park-oslo-little-boy-crying.jpg')
      ],
      'He is an artist who documents jovial expression of life with sculptures of babies, who inspire him into incorporating himself at a young age. A great sculptor, he is known to show great care and attention to detail from early childhood, and he is very willing and able to show his art and to create art he feels will benefit all. He also takes a hard look into his work and knows why it is so important.',
      ['sculpture'],
      ['tattoo','installation'],
      [
        new Link('web','https://art.com'),
        new Link('ig','https://instagram.com'),
        new Link('twitter','https://twitter.com')
      ],
      'referrer'
    ),
    new Artist(
      'Sofia Wheeler',
      'sofiawheeler',
      '#ff0000',
      'photo / film',
      'New York',
      'email@email.com',
      'she/her',
      [
        new Work('image','/works/Untitled-3.png-1-520x400.jpg'),
        new Work('image','/works/b77ae5e7-88e0-4b46-9baf-40998242c20f.jpg'),
        new Work('image','/works/Chernobyl---The-Aftermath-015.jpg'),
        new Work('image','/works/c017.jpg'),
      ],
      'When we have some moments in our lives, we want to show people how important those moments are to us in certain ways. For us to do that, we need to be clear about what our experience of death is and what those experiences mean but also about us as family members. Photography should be a place where we feel that we have that connection and respect for the places that were lost. It does not mean we feel bad for what we\'ve lost. It means that we truly are grateful for those in our lives we choose not to see or know about and for how we have affected them. It also means that we feel sorry for how our actions and lives affected them and we may do things that hurt or hurt in ways that hurt those of us.',
      ['photo / film','sculpture'],
      ['performance','design'],
      [
        new Link('web','https://art.com'),
        new Link('ig','https://instagram.com'),
      ],
      'referrer'
    ),
    new Artist(
      'Connor Garrison',
      'cgarrison',
      '#ffff00',
      'design',
      'London',
      'email@email.com',
      'he/him',
      [
        new Work('image','/works/50-incredible-3d-logo-design-examples-for-inspiration-cover.png'),
        new Work('image','/works/attachment_89914782.png'),
        new Work('image','/works/Shiny.jpg'),
        new Work('image','/works/ribbion.jpg'),
      ],
      'My career for a few years spent designing for the web, but I\'ve become more passionate since then. My recent projects included a simple 3D logo of The Ultimate Fizz, a simple 3D photo of a video game, a video that has been updated to the latest 2D rendering technology and a gorgeous 3D painting. These are just some of the great projects that I\'ve worked with over the years. I have been lucky enough to play a great amount of role on one of my favorite websites, the one that takes me from being an awesome and creative',
      ['design','3d'],
      ['design','visual'],
      [
        new Link('web','https://art.com'),
        new Link('ig','https://instagram.com'),
      ],
      'referrer'
    ),
    new Artist(
      'renderghost',
      'renderghost',
      '#000000',
      '3d',
      'nowhere',
      'email@email.com',
      'none',
      [
        new Work('image','/works/151279218-ai-robot-cyberpunk-style-bionic-automatic-face-futuristic-technology-network-server-online-backgroun.jpg'),
        new Work('image','/works/gas-mask-5543894_960_720.jpg'),
        new Work('image','/works/SCG_0021_Layer-1.jpg'),
        new Work('image','/works/tsvet-stil-fantasy-style-color-fantastika-fiction-illustra-1.jpg'),
      ],
      'I am nowhere, my art does not exist, I am nowhere, my dream doesn\'t exist. Please, stop. I find that the world has been stolen and that some of my stories must be told in order to keep this world\'s secrets intact in order to keep this whole universe intact and to keep this whole universe alive.',
      ['3d','design'],
      [],
      [],
      'referrer'
    ),
    new Artist(
      'Selima Khalil',
      'selkhal00',
      '#00ffff',
      'textile',
      'Manchester',
      'email@email.com',
      'she/they',
      [
        new Work('image','/works/adipocere-03.jpg'),
        new Work('image','/works/Trolleyed-525x525mm.jpg'),
        new Work('image','/works/960x0.jpg'),
        new Work('image','/works/adipocere_beautifulbizarre_001.jpg'),
      ],
      'Selima Khalil is an artist and DIY designer working within the realm of contemporary embroidery. She creates of one of a kind hand stitched artworks thoughtfully freed from the expectations of traditional Fine Art. Her work is inspired by classical art works that are often considered decorative or ornamental. She started her career with an eye to create new artworks as part of her project artfully. The result are a range of beautiful handcrafted pieces of contemporary artistic art. She hopes to have them to display at festivals and in schools.',
      ['textile'],
      ['photo / film','performance'],
      [
        new Link('web','https://art.com'),
        new Link('ig','https://instagram.com'),
      ],
      'referrer'
    ),
    new Artist(
      'Lily Liu',
      'llllllll',
      '#990000',
      'design',
      'Los Angeles',
      'email@email.com',
      'she/her',
      [
        new Work('image','/works/Backchannel-Uyghur-TikTok.jpg'),
        new Work('image','/works/Hsu-AsianAmerican.jpg'),
        new Work('image','/works/gettyimages-165904997-1024x1024.jpg'),
        new Work('image','/works/564fb56994af4bbdbbf0a769f85f5a5f.jpeg'),
      ],
      'Lily Liu creates vector designs associating loss and diaspora to the presence of the external environment, an element of which is a loss vector which is always negative. In the absence of further proof that this concept has any foundation there is no possible way of verifying it or any other aspects of its existence. The design uses a method consisting of a group of three nodes on a graph. The nodes connect the three-dimensional structure of one node by a means similar to the one on the right. These nodes are called nodes of the design, while the three-dimensional representation of that node can be used to visualize changes in the structure in the environment.',
      ['design','photo / film'],
      ['tattoo','movement','performance','3d','design','sound'],
      [
        new Link('web','https://art.com'),
      ],
      'referrer'
    ),
    new Artist(
      'Melissa Villanueva',
      'mlvz',
      '#690ab6',
      'visual',
      'Berlin',
      'email@email.com',
      'she/her',
      [
        new Work('image','/works/s-l640.jpg'),
        new Work('image','/works/River2web.jpg'),
        new Work('image','/works/806_2397_articles.jpg'),
        new Work('image','/works/arghael-main-235a859f.jpeg'),
      ],
      'The human body is a mirror that is the most intimate and meaningful one on Earth because it is the most direct and direct form of contact we have with the universe itself, at its most profound the sexual character is to deepen the desires and the most occult passions . So, like our own physical body, we don\'t just draw, but we use it for sexual purposes. We use it as a sexual metaphor and literally in any creative medium to express our emotions, desires, aspirations, desires within it, within ourselves, when we have them.',
      ['visual','design','3d'],
      ['design','textile','movement'],
      [
        new Link('web','https://art.com'),
        new Link('ig','https://instagram.com'),
      ],
      'referrer'
    ),
    new Artist(
      'Hank Knight',
      'knight-construction',
      '#00ff00',
      'installation',
      'Ohio',
      'email@email.com',
      'he/him',
      [
        new Work('image','/works/180704154929-yugoslavia-architecture.jpg'),
        new Work('image','/works/2019-04-17-OpticaBasanta-020.jpg'),
        new Work('image','/works/SOSNO83850-hires-1024x718.jpg'),
        new Work('image','/works/restaurant_minsk_potsdam.jpg'),
      ],
      'Hank Knight creates site-specific installations about decaying infrastructure. His mixed media work expounds possibilities of rebar and concrete to challenge the narrative of urban living.\n\n(The above descriptions are only for reference purposes and should not be used as a substitute for the construction of the actual infrastructure used by the local authority or the general population, particularly on a public road or pedestrian bridge.)',
      ['installation','sculpture'],
      ['visual','photo / film'],
      [
        new Link('web','https://art.com'),
        new Link('ig','https://instagram.com'),
      ],
      'referrer'
    ),
    new Artist(
      'harsh pokes',
      'harshpokes',
      '#000000',
      'tattoo',
      'the gutter',
      'email@email.com',
      'they/them',
      [
        new Work('image','/works/badass-tattoos-2.jpg'),
        new Work('image','/works/49773553a4cba7a804851a6a7afd0588.jpg'),
        new Work('image','/works/561d3f6bce3ba65bf51887de034b6587.jpg'),
        new Work('image','/works/xmLPhXM.jpeg'),
      ],
      '■ ■ ■ your body is useless ■ ■ ■',
      ['tattoo'],
      ['tattoo'],
      [
        new Link('web','https://art.com'),
        new Link('ig','https://instagram.com'),
      ],
      'referrer'
    ),
    new Artist(
      'dj partybb',
      'partybb',
      '#ff99aa',
      'sound',
      'extremely online',
      'email@email.com',
      'she/her',
      [
        new Work('soundcloud','https://soundcloud.com/toilet-ov-hell/merzbow-feat-pitbull-give-me-pulse-demon-tonight'),
        new Work('soundcloud','https://soundcloud.com/noisey/dj-george-costanza-country-rap-mix'),
        new Work('soundcloud','https://soundcloud.com/booty-master/every-drop-on-recess-at-once')
      ],
      'dj partybb is the hottest new selector with the best of extreme trance, DDOS-core, keygen loops, and recursive nightcore versions of chamber music. It\'s up to you to decide how you see your world in general. If you are into dark house, high drama, trance, ambient, whatever, or any genre where you want to mix it into a mix, there is no one genre better suited to you. The result is a music and performance that has always made for some pretty insane experiences... and that is why you need some serious time for this.',
      ['sound','performance'],
      ['movement','installation'],
      [
        new Link('web','https://art.com'),
        new Link('ig','https://instagram.com'),
        new Link('soundcloud','https://soundcloud.com'),
        new Link('bandcamp','https://bandcamp.com'),
      ],
      'referrer'
    ),
    new Artist(
      'Emmanuel Amadi',
      'emmanuelfilms',
      '#aaaa33',
      'photo / film',
      'Lagos, Nigeria',
      'email@email.com',
      'he/him',
      [
        new Work('youtube','https://www.youtube.com/watch?v=IZ0WrPG9PTg')
      ],
      'Emmanuel Amadi explores regeneration of nature with his films. His first film "The Transformative Nature" focuses on both positive and negative impact that people feel on others. He believes that a positive image and understanding of others, coupled with being able to deal with the experiences we don\'t have, leads to much more life energy than just being the man you saw on TV, you were at one of those days when it worked on TV.',
      ['sound','performance'],
      ['movement','installation'],
      [
        new Link('web','https://art.com'),
        new Link('ig','https://instagram.com'),
        new Link('vimeo','https://vimeo.com'),
      ],
      'referrer'
    ),
    new Artist(
      'Rachelle Fornier',
      'rachellefornier',
      '#3333ff',
      'movement',
      'Montréal',
      'email@email.com',
      'she/her',
      [
        new Work('image','/works/urn_cambridge.org_id_binary_20200813122209779-0803_S0149767720000145_S0149767720000145_fig1.png'),
        new Work('image','/works/ShostakovichTrilogy_FrancesChung_Header.jpg'),
        new Work('image','/works/DU19-Hocus-Pocus-Philippe-Saire.-Photo-Philippe-Pache-2-1-1170x600.jpg'),
        new Work('image','/works/2-280979-Main-900x556-8.jpg'),
      ],
      'Rachelle Fornier excels in modern dance as a medium for communicating despair.  When things begin to turn sour for her—and I think that many of us—people who think she\'s a victim of her own depression might be just as shocked as I am and won\'t be surprised to hear that.  I\'ve heard her respond to things like this in the way I know the therapist and the person who made her feel so helpless and sad that the therapist is "sorry".',
      ['movement','performance'],
      ['sound','photo / film'],
      [
        new Link('web','https://art.com'),
        new Link('ig','https://instagram.com'),
      ],
      'referrer'
    ),
    new Artist(
      'Cat Antioch',
      'theywillneverleaveusalone',
      '#333333',
      'performance',
      'Austin, TX',
      'email@email.com',
      'they/them',
      [
        new Work('image','/works/panopticon-invert-1.jpg'),
        new Work('image','/works/Giselle-Stanborough_2020_03_23-015--1140x641.jpeg'),
        new Work('image','/works/187-julia-scher.jpg'),
        new Work('image','/works/gettyimages-606073410-612x612.jpg'),
      ],
      'Cat Antioch is a performance artist exposing the hypocrisy of the prison industrial complex. This focus stemmed from their time in Austin Correctional Facility for possession of decommissioned nuclear artifacts. The facility came up with one of the most well executed prison industrial designs since the US-designated and tested \'torture gas chambers\'. They didn\'t even have air conditioning. So why would a single person make a conscious decision to go through the nightmare, or do so while surrounded by a pile of toxic waste? In the same vein, the sound of \'scratches, stabs, scratches, and stabs\' from surrounding inmates provided a soundtrack for disassociation.',
      ['performance','sound'],
      ['performance','installation','sculpture'],
      [
        new Link('web','https://art.com'),
        new Link('ig','https://instagram.com'),
      ],
      'referrer'
    ),
  ]
)

for(let i = 0; i<artistdata.artists.length; i++){
  artistdata.artists[i].referredBy = artistdata.artists[(i+1)%artistdata.artists.length]
}

export default artistdata
