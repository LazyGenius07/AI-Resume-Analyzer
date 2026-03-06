import SkillChart from "./SkillChart";

function AnalysisResult({ result }) {
  return (
    <section className="results-grid">
      <article className="result-card">
        <h2>AI Analysis</h2>
        <div className="analysis-text">{result.ai_analysis}</div>
      </article>

      <article className="result-card chart-card">
        <h2>Market Skill Demand</h2>
        <SkillChart skills={result.market_trends} />
      </article>
    </section>
  );
}

export default AnalysisResult;
