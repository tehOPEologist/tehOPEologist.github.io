import React, { lazy, Suspense, useEffect, useState } from "react";
import Text from "../Text";
import Content from "../Content";
import Line from "../Line";
import Box from "../Box";
import Link from "../Link";
import styles from "./styles";

export default function Source() {
  const [TopOfExport, setTopOfExport] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setTopOfExport(lazy(() => import("./TopOfExport")));
    setHasMounted(true);
  }, []);

  const { footer } = styles();

  return (
    hasMounted && (
      <Content>
        <Box>
          <Line>
            <Text color="brown" italic spaceAtEnd>
              import
            </Text>
            <Text color="orange" spaceAtEnd>
              {"{"}
            </Text>
            <Text color="lightGreen" spaceAtEnd>
              useDegree
            </Text>
            <Text color="orange" spaceAtEnd>
              {"}"}
            </Text>
            <Text color="brown" italic spaceAtEnd>
              from
            </Text>
            <Text color="teal">{'"@ucf/digital-media"'}</Text>
            <Text color="orange">;</Text>
          </Line>
          <Line>
            <Text color="brown" italic spaceAtEnd>
              import
            </Text>
            <Text color="orange" spaceAtEnd>
              {"{"}
            </Text>
            <Text color="lightGreen" spaceAtEnd>
              SeniorWebDeveloper
            </Text>
            <Text color="orange" spaceAtEnd>
              {"}"}
            </Text>
            <Text color="brown" italic spaceAtEnd>
              from
            </Text>
            <Text color="teal">{'"@curse/engineering"'}</Text>
            <Text color="orange">;</Text>
          </Line>
          <Line>
            <Text color="brown" italic spaceAtEnd>
              import
            </Text>
            <Text color="orange" spaceAtEnd>
              {"{"}
            </Text>
            <Text color="lightGreen" spaceAtEnd>
              FrontEndEngineerII
            </Text>
            <Text color="orange" spaceAtEnd>
              {"}"}
            </Text>
            <Text color="brown" italic spaceAtEnd>
              from
            </Text>
            <Text color="teal">{'"@amazon/engineering"'}</Text>
            <Text color="orange">;</Text>
          </Line>
          <Line>
            <Text spaceAtEnd />
          </Line>
          <Suspense fallback={null}>
            <TopOfExport />
          </Suspense>
          <Line indent={6}>
            <Text color="lightGreen">team</Text>
            <Text color="orange">=</Text>
            <Text color="teal">{'"Mobile Growth/Engagement"'}</Text>
          </Line>
          <Line indent={6}>
            <Text color="lightGreen">startDate</Text>
            <Text color="orange">{"={"}</Text>
            <Text color="yellow" spaceAtEnd>
              new
            </Text>
            <Text color="darkGreen">Date</Text>
            <Text color="orange">(</Text>
            <Text color="pink">2020</Text>
            <Text color="orange" spaceAtEnd>
              ,
            </Text>
            <Text color="pink">1</Text>
            <Text color="orange">{")}"}</Text>
          </Line>
          <Line indent={6}>
            <Text color="lightGreen">previousWorkExperience</Text>
            <Text color="orange">{"={["}</Text>
          </Line>
          <Line indent={8}>
            <Text color="orange">{"<"}</Text>
            <Text color="darkGreen" spaceAtEnd>
              FrontEndEngineerII
            </Text>
          </Line>
          <Line indent={10}>
            <Text color="lightGreen">team</Text>
            <Text color="orange">=</Text>
            <Text color="teal">{'"Woot! Experience"'}</Text>
          </Line>
          <Line indent={10}>
            <Text color="lightGreen">startDate</Text>
            <Text color="orange">{"={"}</Text>
            <Text color="yellow" spaceAtEnd>
              new
            </Text>
            <Text color="darkGreen">Date</Text>
            <Text color="orange">(</Text>
            <Text color="pink">2016</Text>
            <Text color="orange" spaceAtEnd>
              ,
            </Text>
            <Text color="pink">9</Text>
            <Text color="orange">{")}"}</Text>
          </Line>
          <Line indent={8}>
            <Text color="orange">{"/>,"}</Text>
          </Line>
          <Line indent={8}>
            <Text color="orange">{"<"}</Text>
            <Text color="darkGreen" spaceAtEnd>
              SeniorWebDeveloper
            </Text>
          </Line>
          <Line indent={10}>
            <Text color="lightGreen">team</Text>
            <Text color="orange">=</Text>
            <Text color="teal">{'"Core"'}</Text>
          </Line>
          <Line indent={10}>
            <Text color="lightGreen">startDate</Text>
            <Text color="orange">{"={"}</Text>
            <Text color="yellow" spaceAtEnd>
              new
            </Text>
            <Text color="darkGreen">Date</Text>
            <Text color="orange">(</Text>
            <Text color="pink">2014</Text>
            <Text color="orange" spaceAtEnd>
              ,
            </Text>
            <Text color="pink">3</Text>
            <Text color="orange">{")}"}</Text>
          </Line>
          <Line indent={8}>
            <Text color="orange">{"/>,"}</Text>
          </Line>
          <Line indent={6}>
            <Text color="orange">{"]}"}</Text>
          </Line>
          <Line indent={6}>
            <Text color="orange">{"{"}</Text>
            <Text color="yellow">...</Text>
            <Text color="orange" spaceAtEnd>
              {"{"}
            </Text>
            <Text color="lightGreen" spaceAtEnd>
              education
            </Text>
            <Text color="orange">{"}}"}</Text>
          </Line>
          <Line indent={4}>
            <Text color="orange">{"/>"}</Text>
          </Line>
          <Line indent={2}>
            <Text color="orange">{");"}</Text>
          </Line>
          <Line>
            <Text color="orange">{"}"}</Text>
          </Line>
        </Box>
        <Line>
          <Text italic comment style={footer} />
        </Line>
        <Link type="comment" style={footer} href="/">
          home
        </Link>
      </Content>
    )
  );
}
