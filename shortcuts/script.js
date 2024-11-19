const shortcuts = [
  {"url":"https://tgx.rs/","baseDomain":"tgx.rs"},
  {"url":"https://old.reddit.com/","baseDomain":"old.reddit.com"},
  {"url":"https://news.ycombinator.com/","baseDomain":"news.ycombinator.com"},
  {"url":"https://www.reddit.com/","baseDomain":"reddit.com"},
  {"url":"https://mail.google.com/mail/u/0/#inbox","baseDomain":"mail.google.com"},
  {"url":"https://kottke.org/","baseDomain":"kottke.org"},
  {"url":"https://photos.google.com/","baseDomain":"photos.google.com"},
  {"url":"https://www.microsiervos.com/","baseDomain":"microsiervos.com"},
  {"url":"https://drive.google.com/drive/u/0/","baseDomain":"drive.google.com"},
  {"url":"https://www.nostv.pt/","baseDomain":"nostv.pt"},
  {"url":"https://thepiratebay10.xyz/","baseDomain":"thepiratebay10.xyz"},
  {"url":"https://myflixerz.to/","baseDomain":"myflixerz.to"},
  {"url":"https://archive.ph/","baseDomain":"archive.ph"},
  {"url":"https://hackaday.com/","baseDomain":"hackaday.com"},
  {"url":"https://www.photopea.com/","baseDomain":"photopea.com"},
  {"url":"https://brunurb.github.io/startpage/","baseDomain":"brunurb.github.io"},
  {"url":"https://github.com/","baseDomain":"github.com"},
  {"url":"https://music.youtube.com/","baseDomain":"music.youtube.com"},
  {"url":"https://en.wikipedia.org/wiki/List_of_The_Graham_Norton_Show_episodes","baseDomain":"en.wikipedia.org"},
  {"url":"https://feedreader.com/online/","baseDomain":"feedreader.com"},
  {"url":"https://ezgif.com/","baseDomain":"ezgif.com"},
  {"url":"https://deepai.org/chat","baseDomain":"deepai.org"},
  {"url":"https://colab.research.google.com/","baseDomain":"colab.research.google.com"},
  {"url":"https://www.wired.com/story/best-apple-tv-plus-shows/","baseDomain":"wired.com"},
  {"url":"https://forums.mvgroup.org/index.php?showtopic=2827","baseDomain":"forums.mvgroup.org"},
  {"url":"https://chat.openai.com/","baseDomain":"chat.openai.com"},
  {"url":"https://rohan.ga/blog/","baseDomain":"rohan.ga"},
  {"url":"https://www.terabox.com/","baseDomain":"terabox.com"},
  {"url":"https://copilot.microsoft.com/?showconv=1","baseDomain":"copilot.microsoft.com"},
  {"url":"https://www.rubinghscience.org/","baseDomain":"rubinghscience.org"},
  {"url":"https://pages.github.com/","baseDomain":"pages.github.com"},
  {"url":"https://3d2k.com/","baseDomain":"3d2k.com"},
  {"url":"https://glitch.com/","baseDomain":"glitch.com"},
  {"url":"https://etiennefd.substack.com/","baseDomain":"etiennefd.substack.com"},
  {"url":"https://chatgpt.com/","baseDomain":"chatgpt.com"},
  {"url":"https://overpass-turbo.eu/#","baseDomain":"overpass-turbo.eu"},
  {"url":"https://notebooklm.google.com/","baseDomain":"notebooklm.google.com"},
  {"url":"https://yandex.com","baseDomain":"yandex.com"},
  {"url":"https://yify-mxx.homes/","baseDomain":"yify-mxx.homes"},
  {"url":"https://samtxt.samrawal.com/","baseDomain":"samtxt.samrawal.com"},
  {"url":"https://svelte.dev/","baseDomain":"svelte.dev"},
  {"url":"https://opensource-heroes.com/","baseDomain":"opensource-heroes.com"},
  {"url":"https://www.marinetraffic.com/en/photos/of/ships/shipid:481942/shipname:KANG%20SHENG%20KOU?order=date_uploaded","baseDomain":"marinetraffic.com"},
  {"url":"http://www.incompleteideas.net/","baseDomain":"incompleteideas.net"},
  {"url":"https://longnow.org/ideas/","baseDomain":"longnow.org"},
  {"url":"https://www.openstreetmap.org/relation/6519610","baseDomain":"openstreetmap.org"},
  {"url":"https://restofworld.org/about/","baseDomain":"restofworld.org"},
  {"url":"https://webwormhole.io/#","baseDomain":"webwormhole.io"},
  {"url":"https://generative.3d2k.com/","baseDomain":"generative.3d2k.com"},
  {"url":"https://www.amusingplanet.com/search/label/Portugal?max-results=10","baseDomain":"amusingplanet.com"},
  {"url":"https://sotl.as/map/coordinates/33.6609,-95.5555/7.2","baseDomain":"sotl.as"},
  {"url":"https://theorangeduck.com/page/last-lamb","baseDomain":"theorangeduck.com"},
  {"url":"https://www.duckipedia.de/Duckipedia:Hauptseite","baseDomain":"duckipedia.de"},
  {"url":"https://itsfoss.com/bootable-windows-usb-linux/","baseDomain":"itsfoss.com"},
  {"url":"https://killedbyapixel.github.io/","baseDomain":"killedbyapixel.github.io"},
  {"url":"https://bestcam.tv/","baseDomain":"bestcam.tv"},
  {"url":"https://www.dfdoom.com/project/eviternity/","baseDomain":"dfdoom.com"},
  {"url":"https://megalodon.jp/","baseDomain":"megalodon.jp"},
  {"url":"https://help.redbubble.com/hc/en-us","baseDomain":"help.redbubble.com"},
  {"url":"https://streamlink.github.io/","baseDomain":"streamlink.github.io"},
  {"url":"https://substack.com/","baseDomain":"substack.com"},
  {"url":"https://clipperz.is/","baseDomain":"clipperz.is"},
  {"url":"https://cartes.app/#5.52/47.014/-0.611","baseDomain":"cartes.app"},
  {"url":"https://www.navalgazing.net/","baseDomain":"navalgazing.net"},
  {"url":"https://www.maritimeheritage.org/index.html","baseDomain":"maritimeheritage.org"},
  {"url":"https://reliefviz.com/app","baseDomain":"reliefviz.com"},
  {"url":"https://therarbg.com/imdb-detail/tt27722061/","baseDomain":"therarbg.com"},
  {"url":"https://www.mindluster.com/","baseDomain":"mindluster.com"},
  {"url":"https://www.heavens-above.com/","baseDomain":"heavens-above.com"},
  {"url":"https://gemini.google.com/app","baseDomain":"gemini.google.com"},
  {"url":"https://www.perplexity.ai/","baseDomain":"perplexity.ai"},
  {"url":"https://www.windy.com/","baseDomain":"windy.com"},
  {"url":"https://blort.meepzorp.com/","baseDomain":"blort.meepzorp.com"},
  {"url":"https://codeium.com/live/general","baseDomain":"codeium.com"},
  {"url":"https://digitalcollections.tcd.ie/concern/works/hm50tr726?locale=en","baseDomain":"digitalcollections.tcd.ie"},
  {"url":"https://www.kaggle.com/","baseDomain":"kaggle.com"},
  {"url":"https://doomwiki.org/wiki/DSDA-Doom","baseDomain":"doomwiki.org"},
  {"url":"https://www.notion.so/","baseDomain":"notion.so"},
  {"url":"https://wiby.me/surprise/","baseDomain":"wiby.me"},
  {"url":"https://prettymapp.streamlit.app/","baseDomain":"prettymapp.streamlit.app"},
  {"url":"https://www.itsnicethat.com/","baseDomain":"itsnicethat.com"},
  {"url":"https://preterhuman.net/","baseDomain":"preterhuman.net"},
  {"url":"https://libregamewiki.org/","baseDomain":"libregamewiki.org"},
  {"url":"https://aeon.co/","baseDomain":"aeon.co"},
  {"url":"https://www.linuxlinks.com/","baseDomain":"linuxlinks.com"},
  {"url":"https://gallica.bnf.fr/accueil/en/content/accueil-en?mode=desktop","baseDomain":"gallica.bnf.fr"},
  {"url":"https://www.thisiscolossal.com/","baseDomain":"thisiscolossal.com"},
  {"url":"https://bsky.app","baseDomain":"bsky.app"},
  {"url":"https://www.messynessychic.com/","baseDomain":"messynessychic.com"},
  {"url":"https://weirdwidewebring.net/","baseDomain":"weirdwidewebring.net"},
  {"url":"https://syllabusproject.org/","baseDomain":"syllabusproject.org"},
  {"url":"https://www.ecosia.org/","baseDomain":"ecosia.org"},
  {"url":"https://publicdomainreview.org/","baseDomain":"publicdomainreview.org"},
  {"url":"https://jalopnik.com/","baseDomain":"jalopnik.com"},
  {"url":"https://we-make-money-not-art.com/","baseDomain":"we-make-money-not-art.com"},
  {"url":"https://www.penaddict.com/","baseDomain":"penaddict.com"},
  {"url":"https://posit.co/","baseDomain":"posit.co"},
  {"url":"https://stackoverflow.com/questions","baseDomain":"stackoverflow.com"},
  {"url":"https://www.beautifulpublicdata.com/","baseDomain":"beautifulpublicdata.com"},
  {"url":"https://www.kamoto.ai/","baseDomain":"kamoto.ai"},
  {"url":"https://knaben.eu/","baseDomain":"knaben.eu"},
  {"url":"https://watchsomuch.to/","baseDomain":"watchsomuch.to"},
  {"url":"http://bt4gprx","baseDomain":"bt4gprx"},
  {"url":"https://app.leonardo.ai/","baseDomain":"app.leonardo.ai"},
  {"url":"https://ext.to/","baseDomain":"ext.to"},
  {"url":"https://showrss.info/","baseDomain":"showrss.info"},
  {"url":"https://www.atlasobscura.com","baseDomain":"atlasobscura.com"},
  {"url":"https://www.38north.org/","baseDomain":"38north.org"},
  {"url":"https://webcurios.co.uk/","baseDomain":"webcurios.co.uk"},
  {"url":"https://www.worksinprogress.news/","baseDomain":"worksinprogress.news"},
  {"url":"http://vox.com/","baseDomain":"vox.com"},
  {"url":"https://www.languagetransfer.org/","baseDomain":"languagetransfer.org"},
  {"url":"https://thekidshouldseethis.com/","baseDomain":"thekidshouldseethis.com"},
  {"url":"https://www.citationneeded.news/","baseDomain":"citationneeded.news"},
  {"url":"https://pudding.cool","baseDomain":"pudding.cool"},
  {"url":"https://hellogithub.com","baseDomain":"hellogithub.com"},
  {"url":"https://neverwasmag.com/","baseDomain":"neverwasmag.com"},
  {"url":"https://dejareviewer.com/","baseDomain":"dejareviewer.com"},
  {"url":"https://www.russianspaceweb.com/index.html","baseDomain":"russianspaceweb.com"},
  {"url":"https://buttondown.com/lauraolin/archive/","baseDomain":"buttondown.com"},
  {"url":"https://talk.observablehq.com/","baseDomain":"talk.observablehq.com"},
  {"url":"https://www.damninteresting.com/","baseDomain":"damninteresting.com"},
  {"url":"https://knots3d.com/","baseDomain":"knots3d.com"},
  {"url":"https://pudding.cool/","baseDomain":"pudding.cool"},
  {"url":"https://www.listennotes.com/","baseDomain":"listennotes.com"},
  {"url":"https://spectrum.ieee.org/","baseDomain":"spectrum.ieee.org"},
  {"url":"https://flashbak.com/","baseDomain":"flashbak.com"},
  {"url":"https://www.npr.org","baseDomain":"npr.org"},
  {"url":"http://godsandfoolishgrandeur.blogspot.com/","baseDomain":"godsandfoolishgrandeur.blogspot.com"},
  {"url":"https://www.addic7ed.com/login.php","baseDomain":"addic7ed.com"},
  {"url":"https://supermaven.com/","baseDomain":"supermaven.com"},
  {"url":"https://avatarmaker.com/","baseDomain":"avatarmaker.com"},
  {"url":"https://poki.com/en/g/monster-tracks","baseDomain":"poki.com"},
  {"url":"https://keeptrack.space/category/resources/","baseDomain":"keeptrack.space"},
  {"url":"https://www.hagerty.com/media/automobilia/the-rise-and-fall-of-matchboxs-toy-car-empire/","baseDomain":"hagerty.com"},
  {"url":"https://www.hathitrust.org/","baseDomain":"hathitrust.org"},
  {"url":"https://hedgehogreview.com/","baseDomain":"hedgehogreview.com"},
  {"url":"https://www.fark.com/","baseDomain":"fark.com"},
  {"url":"https://news.pub/index.html","baseDomain":"news.pub"},
  {"url":"https://www.mentalfloss.com/","baseDomain":"mentalfloss.com"},
  {"url":"https://mymodernmet.com/","baseDomain":"mymodernmet.com"},
  {"url":"https://www.vesselfinder.com","baseDomain":"vesselfinder.com"},
  {"url":"https://claude.ai/new","baseDomain":"claude.ai"},
  {"url":"https://ytch.xyz/","baseDomain":"ytch.xyz"},
  {"url":"https://www.pasabon.nl/","baseDomain":"pasabon.nl"},
  {"url":"https://jaapgrolleman.com/","baseDomain":"jaapgrolleman.com"},
  {"url":"https://www.toxel.com","baseDomain":"toxel.com"},
  {"url":"https://misscellania.blogspot.com/","baseDomain":"misscellania.blogspot.com"},
  {"url":"https://laughingsquid.com/","baseDomain":"laughingsquid.com"},
  {"url":"https://www.metafilter.com/","baseDomain":"metafilter.com"},
  {"url":"https://visualisingchina.net/blog/","baseDomain":"visualisingchina.net"},
  {"url":"https://davidbyrne.com/","baseDomain":"davidbyrne.com"},
  {"url":"https://www.world-archaeology.com/","baseDomain":"world-archaeology.com"},
  {"url":"https://greek-movies.com/","baseDomain":"greek-movies.com"},
  {"url":"https://www.cartoonbrew.com/","baseDomain":"cartoonbrew.com"},
  {"url":"https://www.palladiummag.com/","baseDomain":"palladiummag.com"},
  {"url":"https://brainfucksec.github.io/posts","baseDomain":"brainfucksec.github.io"},
  {"url":"https://resobscura.substack.com/","baseDomain":"resobscura.substack.com"},
  {"url":"https://www.myabandonware.com/","baseDomain":"myabandonware.com"},
  {"url":"https://www.classicdosgames.com/games_menu.html","baseDomain":"classicdosgames.com"},
  {"url":"https://indieweb.org/","baseDomain":"indieweb.org"},
  {"url":"https://chatgpt-prompt-splitter.jjdiaz.dev/","baseDomain":"chatgpt-prompt-splitter.jjdiaz.dev"},
  {"url":"https://predb.net/","baseDomain":"predb.net"},
  {"url":"https://www.sensesatlas.com/","baseDomain":"sensesatlas.com"},
  {"url":"https://www.spaceweather.com/","baseDomain":"spaceweather.com"},
  {"url":"https://poki.com/en/g/drive-mad","baseDomain":"poki.com"},
  {"url":"https://wavesurfer.xyz/","baseDomain":"wavesurfer.xyz"},
  {"url":"https://mossandfog.com/","baseDomain":"mossandfog.com"},
  {"url":"https://www.lambiek.net/comiclopedia.html","baseDomain":"lambiek.net"},
  {"url":"https://improbable.com/","baseDomain":"improbable.com"},
  {"url":"https://wikenigma.org.uk/","baseDomain":"wikenigma.org.uk"},
  {"url":"https://www.vintag.es/","baseDomain":"vintag.es"},
  {"url":"https://www.perfectforroquefortcheese.org/","baseDomain":"perfectforroquefortcheese.org"},
  {"url":"https://blot.im/","baseDomain":"blot.im"},
  {"url":"https://visbug.web.app/","baseDomain":"visbug.web.app"},
  {"url":"https://chriscoyier.net/","baseDomain":"chriscoyier.net"},
  {"url":"https://meyerweb.com/","baseDomain":"meyerweb.com"},
  {"url":"https://kagi.com/smallweb/","baseDomain":"kagi.com"},
  {"url":"https://artsandculture.google.com/","baseDomain":"artsandculture.google.com"},
  {"url":"https://techcrunch.com/","baseDomain":"techcrunch.com"},
  {"url":"https://revanced.app/","baseDomain":"revanced.app"},
  {"url":"https://screenstream.io/","baseDomain":"screenstream.io"},
  {"url":"https://www.404media.co/","baseDomain":"404media.co"},
  {"url":"https://www.blinkshot.io/","baseDomain":"blinkshot.io"},
  {"url":"https://practicalbetterments.com/","baseDomain":"practicalbetterments.com"},
  {"url":"https://www.turboseek.io/","baseDomain":"turboseek.io"},
  {"url":"https://yalereview.org/","baseDomain":"yalereview.org"},
  {"url":"https://pketh.org/","baseDomain":"pketh.org"},
  {"url":"https://www.astronet.ru/","baseDomain":"astronet.ru"},
  {"url":"http://vivovoco.astronet.ru/","baseDomain":"vivovoco.astronet.ru"},
  {"url":"https://www.theverge.com/","baseDomain":"theverge.com"},
  {"url":"https://buttondown.com/clivethompson/archive/","baseDomain":"buttondown.com"},
  {"url":"https://www.spoon-tamago.com/","baseDomain":"spoon-tamago.com"},
  {"url":"https://dailyportalz.jp/b/en/","baseDomain":"dailyportalz.jp"},
  {"url":"https://jodiettenberg.substack.com/","baseDomain":"jodiettenberg.substack.com"},
  {"url":"https://arstechnica.com/","baseDomain":"arstechnica.com"},
  {"url":"https://meanwhile.substack.com/","baseDomain":"meanwhile.substack.com"},
  {"url":"https://www.presentandcorrect.com/blogs/blog","baseDomain":"presentandcorrect.com"},
  {"url":"https://www.swiss-miss.com/","baseDomain":"swiss-miss.com"},
  {"url":"https://nowiknow.com/archives/","baseDomain":"nowiknow.com"},
  {"url":"https://pluralistic.net/","baseDomain":"pluralistic.net"},
  {"url":"https://ooh.directory/","baseDomain":"ooh.directory"},
  {"url":"https://www.gyford.com/","baseDomain":"gyford.com"},
  {"url":"https://www.timemachinego.com/linkmachinego/","baseDomain":"timemachinego.com"},
  {"url":"https://pinboard.in/popular/","baseDomain":"pinboard.in"},
  {"url":"https://www.bloodinthemachine.com/","baseDomain":"bloodinthemachine.com"},
  {"url":"https://scifiinterfaces.com/","baseDomain":"scifiinterfaces.com"},
  {"url":"https://tinybots.net/artbot/create","baseDomain":"tinybots.net"},
  {"url":"https://stackexchange.com","baseDomain":"stackexchange.com"},
  {"url":"https://aicreate.com/","baseDomain":"aicreate.com"},
  {"url":"https://huggingface.co/spaces/stabilityai/stable-diffusion-3.5-large","baseDomain":"huggingface.co"},
  {"url":"https://perchance.org/ai-text-to-image-generator","baseDomain":"perchance.org"},
  {"url":"https://www.i2img.com/text-to-image","baseDomain":"i2img.com"},
  {"url":"https://www.thefreelibrary.com/","baseDomain":"thefreelibrary.com"},
  {"url":"https://www.sciencealert.com/","baseDomain":"sciencealert.com"},
  {"url":"https://www.sciencedaily.com/","baseDomain":"sciencedaily.com"},
  {"url":"https://www.themarginalian.org/","baseDomain":"themarginalian.org"},
  {"url":"https://aicado.ai/free-ai-tools/free-ai-image-extender-outpainting","baseDomain":"aicado.ai"},
  {"url":"https://bldgblog.com/","baseDomain":"bldgblog.com"},
  {"url":"https://browser.dataspace.copernicus.eu/","baseDomain":"browser.dataspace.copernicus.eu"},
  {"url":"https://aicado.ai/free-ai-tools/","baseDomain":"aicado.ai"},
  {"url":"https://www.dailymotion.com/pt","baseDomain":"dailymotion.com"},
  {"url":"https://www.dailymotion.com/SdTvClips","baseDomain":"dailymotion.com"},
  {"url":"https://cobalt.tools/","baseDomain":"cobalt.tools"},
  {"url":"https://perchance.org/ai-generated-hierarchical-world","baseDomain":"perchance.org"},
  {"url":"https://sfxr.me/","baseDomain":"sfxr.me"},
  {"url":"https://nostalgic-css.github.io/NES.css/ostalgic-css.github.io/NES.css/","baseDomain":"nostalgic-css.github.io"},
  {"url":"https://dangerousminds.net/","baseDomain":"dangerousminds.net"},
  {"url":"https://perchance.org/fusion-ai-image-generator","baseDomain":"perchance.org"},
  {"url":"https://perchance.org/ai-text-to-image-generators","baseDomain":"perchance.org"},
  {"url":"https://nautil.us/","baseDomain":"nautil.us"},
  {"url":"http://theappendix.net/","baseDomain":"theappendix.net"},
  {"url":"https://www.nature.com/","baseDomain":"nature.com"},
  {"url":"https://placesjournal.org/","baseDomain":"placesjournal.org"},
  {"url":"https://hyperallergic.com/","baseDomain":"hyperallergic.com"},
  {"url":"https://chat.mistral.ai/chat","baseDomain":"chat.mistral.ai"},
  {"url":"https://phys.org/","baseDomain":"phys.org"},
  {"url":"https://www.theparisreview.org/","baseDomain":"theparisreview.org"},
  {"url":"https://archaeology.org/","baseDomain":"archaeology.org"}
  // Add more shortcuts here
];

const topSitesList = document.querySelector('.top-sites-list');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

shortcuts.forEach(shortcut => {
  const listItem = document.createElement('li');
  listItem.className = 'top-site-outer';

  const innerDiv = document.createElement('div');
  innerDiv.className = 'top-site-inner';

  const link = document.createElement('a');
  link.href = shortcut.url;
  link.className = 'top-site-button';

  const tile = document.createElement('div');
  tile.className = 'tile';
  tile.setAttribute('aria-hidden', 'true');

  const iconWrapper = document.createElement('div');
  iconWrapper.className = 'icon-wrapper';
  iconWrapper.setAttribute('data-fallback', shortcut.label ? shortcut.label[0] : shortcut.baseDomain[0]);

  const topSiteIcon = document.createElement('img');
  topSiteIcon.className = 'top-site-icon';
  topSiteIcon.src = `https://www.google.com/s2/favicons?domain=${new URL(shortcut.url).hostname}`;
  topSiteIcon.alt = "favicon";
  topSiteIcon.onerror = function() {
    // If favicon fails to load, use the fallback letter
    this.style.display = 'none';
    const fallbackLetter = document.createElement('div');
    fallbackLetter.className = 'letter-fallback';
    fallbackLetter.textContent = iconWrapper.getAttribute('data-fallback');
    fallbackLetter.style.color = getRandomColor(); // Assign a random color
    iconWrapper.appendChild(fallbackLetter);
  };

  iconWrapper.appendChild(topSiteIcon);
  tile.appendChild(iconWrapper);

  const title = document.createElement('div');
  title.className = 'title';

  const titleSpan = document.createElement('span');
  titleSpan.textContent = shortcut.label || shortcut.baseDomain;

  title.appendChild(titleSpan);

  link.appendChild(tile);
  link.appendChild(title);
  innerDiv.appendChild(link);
  listItem.appendChild(innerDiv);
  topSitesList.appendChild(listItem);
});z
