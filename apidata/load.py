from flask_uploads import UploadSet, IMAGES, configure_uploads, ALL
from flask import request, Flask, redirect, url_for, render_template, jsonify
import os
from datetime import datetime
import time
import uuid

app = Flask(__name__)
app.config['UPLOADED_PHOTO_DEST'] = os.path.dirname(os.path.abspath(__file__)) + '/static/image'
app.config['UPLOADED_PHOTO_ALLOW'] = IMAGES
photos = UploadSet('PHOTO')
configure_uploads(app, photos)

@app.route('/upload', methods=['POST', 'GET'])
def upload():
    if request.method == 'POST' and 'photo' in request.files:
        try:
            filename = photos.save(request.files['photo'], name=''+ str(datetime.utcnow().year) + str(datetime.utcnow().month) +'/'+ str(uuid.uuid4().hex) +'.')
            return jsonify({'status': '200', 'path': filename})
        except Exception as inst:
            return jsonify({'status': '403', 'message': 'abnormal situation'})
        # return redirect(url_for('show', name=filename))
    return jsonify({'status': '404', 'message': 'The picture is missing'})

@app.route('/photo/<name>')
def show(name):
    if name is None:
        abort(404)
    url = photos.url(name)
    return render_template('show.html', url=url, name=name)

if __name__ == '__main__':
    app.run(debug=True)