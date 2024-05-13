from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/submit", methods=["POST"])
def submit():
    data = request.get_json()
    input_text = data.get("inputText", "")
    # Process the input as needed, for now, just echo it back
    return jsonify({"message": f"Received: {input_text}"})

if __name__ == "__main__":
    app.run(debug=True)
