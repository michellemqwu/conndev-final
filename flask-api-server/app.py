import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from flask import (Flask, request, jsonify)
import praw
from datetime import datetime
#flask --app app run

reddit = praw.Reddit(client_id ='tQMpPI22lCK3J7CO_wy9RA',
					client_secret ='r571KeVPD-wovLQIkdbPPgyrkZz6HQ',
					user_agent ='Dependent_Square_896')

sp = spotipy.Spotify(auth_manager=SpotifyClientCredentials(client_id="a3bf88ded7f9444eb6211a0304969c31",
                                                           client_secret="fe01a1b08a214b769d8c7893e9a21da9"))

target_artist_id = '6RHTUrRF63xao58xh9FXYJ'
target_artist_name = 'IVE'
target_subreddit = 'IVE'

app = Flask(__name__)

@app.route('/melon', methods=['GET'])
def get_melon_data():
    melon_chart = sp.playlist("6kbzPEHj3uMPRFsR3v6xzE")
    results = extract_tracks_from_playlist(melon_chart)
    return jsonify(results), {"Access-Control-Allow-Origin": "*"}

@app.route('/topfifty', methods=['GET'])
def get_top_fifty_data():
    top_fifty_south_korea = sp.playlist('37i9dQZEVXbNxXF4SkHj9F')
    results = extract_tracks_from_playlist(top_fifty_south_korea)
    return jsonify(results), {"Access-Control-Allow-Origin": "*"}

@app.route('/kclubparty', methods=['GET'])
def get_kclub_party_data():
    k_club_party = sp.playlist('37i9dQZF1DX4RDXswvP6Mj')
    results = extract_tracks_from_playlist(k_club_party)
    return jsonify(results), {"Access-Control-Allow-Origin": "*"}

@app.route('/reddithot', methods=['GET'])
def get_reddit_posts():
    results = []
    subreddit = reddit.subreddit(target_subreddit).hot(limit=10)
    for submission in subreddit:
        if not submission.stickied:
            utc = int(submission.created_utc)
            timestamp = datetime.utcfromtimestamp(utc).strftime('%Y-%m-%d %H:%M:%S')
            results.append({'timestamp' : timestamp, 'title' : submission.title, 'context' : submission.selftext})
    return jsonify({target_subreddit : results}), {"Access-Control-Allow-Origin": "*"}

def extract_tracks_from_playlist(playlist):
    results = []
    for idx, item in enumerate(playlist['tracks']['items']):
        for artist in item['track']['artists']:
            artist_id = artist['id']
            if artist_id == target_artist_id:
                track_name = item['track']['name']
                popularity = item['track']['popularity']
                ranking = idx + 1
                results.append({'track' : track_name, 'popularity' : popularity, 'ranking' : ranking})
    return {target_artist_name : results}
