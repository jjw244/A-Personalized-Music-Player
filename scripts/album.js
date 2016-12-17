// Example Album
var albumPicasso = {
        title: 'The Colors',
        artist: 'Pablo Picasso',
        label: 'Cubism',
        year: '1881',
        albumArtUrl: 'assets/images/album_covers/01.png',
        songs: [
            { title: 'Blue', duration: '4:26' },
            { title: 'Green', duration: '3:14' },
            { title: 'Red', duration: '5:01' },
            { title: 'Pink', duration: '3:21'},
            { title: 'Magenta', duration: '2:15'}
        ]
    };
 
// Another Example Album
var albumMarconi = {
        title: 'The Telephone',
        artist: 'Guglielmo Marconi',
        label: 'EM',
        year: '1909',
        albumArtUrl: 'assets/images/album_covers/20.png',
        songs: [
            { title: 'Hello, Operator?', duration: '1:01' },
            { title: 'Ring, ring, ring', duration: '5:01' },
            { title: 'Fits in your pocket', duration: '3:21'},
            { title: 'Can you hear me now?', duration: '3:14' },
            { title: 'Wrong phone number', duration: '2:15'}
        ]
    };

var albumFelix = {
        title: 'The Cat',
        artist: 'Pat Messmer',
        label: 'Curiosity',
        year: '1920',
        albumArtUrl: 'assets/images/album_covers/13.png',
        songs: [
            { title: '1919', duration: '1:01' },
            { title: 'Otto Messmer', duration: '5:01' },
            { title: 'Musical Mews', duration: '3:21'},
            { title: 'Feline Follies', duration: '3:14' },
            { title: 'Pat Sullivan', duration: '2:15'}
        ]
    };

var createSongRow = function (songNumber, songName, songLength) {
        var template =
            '<tr class="album-view-song-item">'
            + '  <td class="song-item-number">' + songNumber + '</td>'
            + '  <td class="song-item-title">' + songName + '</td>'
            + '  <td class="song-item-duration">' + songLength + '</td>'
            + '</tr>';
 
        return template;
    };

 // HTML elements required to display on the album page

var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

var setCurrentAlbum = function (album) {
     // First child node of an element, and returns or sets the value of a node

        albumTitle.firstChild.nodeValue = album.title;
        albumArtist.firstChild.nodeValue = album.artist;
        albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
        albumImage.setAttribute('src', album.albumArtUrl);
 
     // Clear the album song list HTML to make sure there are no interfering elements
        albumSongList.innerHTML = '';
 
     // Go through all the songs from the specified album object and insert them into the HTML
        for (var i = 0; i < album.songs.length; i++) {
            albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
        }
 };
 
 window.onload = function() {
     setCurrentAlbum(albumPicasso);
     
     var albums = [albumPicasso, albumMarconi, albumFelix];
     albumImage.addEventListener("click", function (event) {
            for (var i = 0; i < albums.length; i++) {
                setCurrentAlbum(albums[i]);
            }
     });
     
 };