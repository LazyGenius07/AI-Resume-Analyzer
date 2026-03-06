from google import genai

client = genai.Client(api_key="Your_API_KEY")

def analyze_resume(data):

    prompt = f"""
    Analyze this resume.

    Skills:
    {data["skills"]}

    Provide:

    1. Resume Score out of 100
    2. Strengths
    3. Weaknesses
    4. Improvement Suggestions
    """

    response = client.models.generate_content(
        model="gemini-3-flash-preview",
        contents=prompt
    )

    return response.text