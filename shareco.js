var DqorPGYxXi=window.speechSynthesis;function wNfBSTOAXo(t){var aux=document.createElement("input"); aux.setAttribute("value", t); document.body.appendChild(aux); aux.select(); document.execCommand("copy"); document.body.removeChild(aux); if('swal' in window){Toast.fire({icon: 'success',title: 'The Text Was Copied',timer: 3500});}else{var x=document.getElementById("TWi1GBj9bd"); x.className="show"; setTimeout(function(){x.className=x.className.replace("show", "");}, 1500);}}function xpYIQAXbuG(){var selection=window.getSelection(); var object={parent : null, text : '', rect : null}; if ( selection.rangeCount > 0 ){object={parent : selection.anchorNode.parentNode, text : selection.toString().trim(), rect : selection.getRangeAt(0).getBoundingClientRect()};}return object;}function zbjDZqHQco(){var sharing=document.querySelector('.BNpNqXoYlB'); var highlight=xpYIQAXbuG(); if (highlight.text===''){sharing.setAttribute( 'class', 'BNpNqXoYlB' ); sharing.style.left=0; sharing.style.top=0; return;}if(highlight.text.split(" ").length > 1){var width=( highlight.rect.width / 2 ) - 120; document.getElementById('TvGsRcnPUT').style.display="none";}else{var width=( highlight.rect.width / 2 ) - 140; document.getElementById('TvGsRcnPUT').style.display="block";}if(highlight.text.length > 1000){var width=( highlight.rect.width / 2 ) - 100; document.getElementById("EHv8jeBzuY").style.display="none";}else{document.getElementById("EHv8jeBzuY").style.display="block";}var scrollTop=(window.pageYOffset !==undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop; sharing.setAttribute('class', 'BNpNqXoYlB suqDFqyIDQ'); sharing.style.left=( highlight.rect.left + width ) + "px"; sharing.style.top=scrollTop + ( highlight.rect.top - 61 ) + "px"; if(width <=-140){sharing.style.display="none";}}document.body.addEventListener('pointerup', function(){setTimeout(zbjDZqHQco, 100);}); document.getElementById('EHv8jeBzuY').addEventListener('click', function(){var domain=window.location.origin; var highlight=xpYIQAXbuG(); var url=window.location.href; var docURL=encodeURIComponent(url); var text=encodeURIComponent(highlight.text); var tweetURL=domain + '/post/s/new/?text=' + text + '&url=' + docURL; window.open(tweetURL, '_blank').focus(); event.preventDefault();}); document.getElementById('TvGsRcnPUT').addEventListener('click', function(){var highlight=xpYIQAXbuG(); var url='https://www.merriam-webster.com/dictionary/' + highlight.text; window.open(url, '_blank').focus(); event.preventDefault();}); document.getElementById('466MeZqqki').addEventListener('click', function(){var highlight=xpYIQAXbuG(); wNfBSTOAXo(highlight.text); event.preventDefault();}); function BXsnZlUVtn(){var selection=window.getSelection().getRangeAt(0); var selectedText=selection.extractContents(); var span=document.createElement("span"); span.style.backgroundColor="yellow"; span.appendChild(selectedText); selection.insertNode(span);}function BlQuuJopJf(){var selection=window.getSelection().getRangeAt(0); var selectedText=selection.extractContents(); var span=document.createElement("span"); span.style.backgroundColor="white"; span.appendChild(selectedText); selection.insertNode(span);}document.getElementById('899UksLdo').addEventListener( 'click', function(){BXsnZlUVtn(); event.preventDefault();}); document.getElementById('8P9UksLco').addEventListener( 'click', function(){BlQuuJopJf(); event.preventDefault();}); if("speechSynthesis" in window){}else{document.getElementById('Pl9krsLno').style.display="none";}document.getElementById('Pl9krsLno').addEventListener( 'click', function(){if("speechSynthesis" in window){var highlight=xpYIQAXbuG(); const utterance=new SpeechSynthesisUtterance(highlight.text); DqorPGYxXi.speak(utterance); event.preventDefault(); document.body.addEventListener('pointerup', function(){DqorPGYxXi.cancel();});}}); document.getElementById('cl9krsLno').addEventListener( 'click', function(){if("speechSynthesis" in window){DqorPGYxXi.cancel(); event.preventDefault();}}); setInterval(function(){if("speechSynthesis" in window){if(DqorPGYxXi.speaking){document.getElementById('cl9krsLno').style.display="block"; document.getElementById('Pl9krsLno').style.display="none";}else{document.getElementById('cl9krsLno').style.display="none"; document.getElementById('Pl9krsLno').style.display="block"}}}, 100);